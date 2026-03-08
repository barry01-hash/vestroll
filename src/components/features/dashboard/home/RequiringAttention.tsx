"use client";
import { motion } from "framer-motion";

function RequiringAttention() {
  const attentions = [
    {
      name: "Contracts",
      attentions: 0,
    },
    {
      name: "Milestone",
      attentions: 3,
    },
    {
      name: "Invoices",
      attentions: 4,
    },
    {
      name: "Time off",
      attentions: 0,
    },
    {
      name: "Time tracking",
      attentions: 2,
    },
    {
      name: "Expense",
      attentions: 0,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="sm:p-4 py-0 px-4 rounded-lg flex gap-2 sm:gap-4  flex-col sm:bg-white flex-1 dark:sm:bg-gray-900">
      <p className="text-base font-medium text-text-header leading-[120%] dark:text-gray-100">
        Requiring attention
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 gap-2 "
      >
        {attentions.map((atn, index) => {
          return (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-4 bg-white sm:border-[#DCE0E5] sm:border flex items-center justify-between shadow-sm hover:shadow-md transition-shadow dark:bg-gray-900 dark:border-gray-800"
              key={index}
            >
              <p className="text-sm text-text-subtext font-medium dark:text-gray-400">
                {atn.name}
              </p>
              <span
                className={`${atn.attentions > 0 ? " text-primary-500" : "text-text-header dark:text-gray-200"} size-8 rounded-full flex items-center justify-center bg-[#F3EBF9] dark:bg-gray-800 font-medium`}
              >
                {atn.attentions}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default RequiringAttention;
