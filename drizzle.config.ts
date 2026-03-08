import { defineConfig } from "drizzle-kit";
import fs from "node:fs";
import path from "node:path";

function getDatabaseUrl() {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  const envLocalPath = path.resolve(process.cwd(), ".env.local");
  const envPath = path.resolve(process.cwd(), ".env");

  if (fs.existsSync(envLocalPath)) {
    const envLocal = fs.readFileSync(envLocalPath, "utf8");
    const match = envLocal.match(/^DATABASE_URL=(.+)$/m);
    if (match?.[1]) return match[1].trim();
  }

  if (fs.existsSync(envPath)) {
    const env = fs.readFileSync(envPath, "utf8");
    const match = env.match(/^DATABASE_URL=(.+)$/m);
    if (match?.[1]) return match[1].trim();
  }

  return undefined;
}

const databaseUrl = getDatabaseUrl();

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL is not set. Add it to .env.local or your shell environment.",
  );
}

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
