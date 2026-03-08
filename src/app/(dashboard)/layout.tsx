import AppShell from "@/components/layout/app-shell";
import { ThemeProvider } from "@/components/providers/theme-provider";
import PageTransition from "@/components/shared/animations/PageTransition";
import { FeedbackWidget } from "@/components/shared/feedback-widget";

export default function AppScopedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AppShell>
        <PageTransition>{children}</PageTransition>
      </AppShell>
      <FeedbackWidget />
    </ThemeProvider>
  );
}
