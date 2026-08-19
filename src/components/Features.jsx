import { motion } from "framer-motion";
import {
  FileSearch,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: FileSearch,
    label: "01",
    title: "Structured report extraction",
    description:
      "Turn information buried inside a report into a cleaner, easier-to-scan interface.",
  },
  {
    icon: Sparkles,
    label: "02",
    title: "Clearer AI summaries",
    description:
      "Get a concise overview of the information extracted from the uploaded report.",
  },
  {
    icon: LayoutDashboard,
    label: "03",
    title: "One organized workspace",
    description:
      "Keep reports, findings, and summaries together instead of jumping between documents.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="border-y border-slate-200 bg-white px-4 py-24 text-slate-900 transition-colors duration-500 dark:border-slate-800 dark:bg-[#0d1117] dark:text-white sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Built around the report
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              Less document hunting.
              <br />
              More clarity.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-500 dark:text-slate-400">
              CliniSense focuses on the information that matters, presenting
              it in a workspace that is easier to navigate and review.
            </p>
          </motion.div>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:shadow-black/20 sm:p-7"
                >
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-105 dark:bg-slate-950 dark:text-white dark:ring-slate-700">
                      <Icon size={19} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-semibold text-slate-950 dark:text-white sm:text-lg">
                          {feature.title}
                        </h3>

                        <span className="text-xs font-semibold text-slate-300 dark:text-slate-600">
                          {feature.label}
                        </span>
                      </div>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;