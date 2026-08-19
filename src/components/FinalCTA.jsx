import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function FinalCTA() {
  return (
    <section
      id="get-started"
      className="bg-[#f7f9fc] px-4 py-24 transition-colors duration-500 dark:bg-[#080b12] sm:px-6 lg:px-8 lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-slate-950 px-6 py-16 text-center transition-colors duration-500 dark:bg-black sm:px-10 sm:py-20 lg:px-20"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
          <Sparkles size={20} />
        </div>

        <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
          Your reports contain information.
          <span className="text-slate-400">
            {" "}
            Make it easier to see.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          Explore a clearer way to organize and understand medical report
          information.
        </p>

        <a
          href="#product"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
        >
          Explore CliniSense

          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </motion.div>
    </section>
  );
}

export default FinalCTA;