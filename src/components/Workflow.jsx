import { motion } from "framer-motion";
import { Brain, FileUp, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileUp,
    title: "Upload your report",
    description:
      "Bring your medical report into CliniSense and keep everything in one place.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Let CliniSense analyze it",
    description:
      "Report content is extracted and organized into a structured view.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "See it more clearly",
    description:
      "Review findings and summaries through an interface built for understanding.",
  },
];

function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-[#f7f9fc] px-4 py-24 text-slate-900 transition-colors duration-500 dark:bg-[#080b12] dark:text-white sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            From document to understanding.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 dark:text-slate-400">
            A simpler way to move from a complex report to a clearer view of
            the information inside it.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                    <Icon size={20} />
                  </div>

                  <span className="text-xs font-semibold tracking-wider text-slate-300 dark:text-slate-600">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-9 text-lg font-semibold text-slate-950 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {step.description}
                </p>

                <div className="mt-8 h-px w-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-px w-0 bg-slate-900 transition-all duration-500 group-hover:w-full dark:bg-white" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Workflow;