import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Check,
  FileText,
  Sparkles,
} from "lucide-react";

const reportValues = [
  { name: "Hemoglobin", value: "14.2 g/dL" },
  { name: "White blood cells", value: "7.8 ×10⁹/L" },
  { name: "Platelets", value: "248 ×10⁹/L" },
  { name: "MCV", value: "89 fL" },
];

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#f7f9fc] px-4 pb-24 pt-36 text-slate-900 transition-colors duration-500 dark:bg-[#080b12] dark:text-white sm:px-6 sm:pt-40 lg:px-8 lg:pb-32 lg:pt-44"
    >
      <HeroBackground />

      <div className="mx-auto max-w-6xl">
        <HeroContent />
        <ProductPreview />
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-10 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-950/30" />

      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm transition-colors duration-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
      >
        <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
        Clinical intelligence, made clearer
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="text-balance text-5xl font-semibold tracking-[-0.055em] text-slate-950 transition-colors duration-500 dark:text-white sm:text-6xl lg:text-7xl"
      >
        Medical reports,
        <br />
        <span className="text-slate-400 dark:text-slate-500">
          finally made understandable.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.16 }}
        className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 transition-colors duration-500 dark:text-slate-400 sm:text-lg"
      >
        CliniSense turns complex medical reports into structured findings and
        clearer explanations, so you can spend less time decoding documents
        and more time understanding them.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24 }}
        className="mt-9 flex justify-center"
      >
        <a
          href="#product"
          className="group flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Explore the product
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </motion.div>
    </div>
  );
}

function ProductPreview() {
  return (
    <motion.div
      id="product"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35 }}
      className="mx-auto mt-16 max-w-5xl"
    >
      <div className="rounded-[28px] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10 transition-colors duration-500 dark:border-slate-800 dark:bg-slate-950 sm:p-3">
        <div className="rounded-[22px] border border-slate-200 bg-[#f8fafc] p-4 transition-colors duration-500 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
          <ProductHeader />

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.5fr]">
            <ReportCard />
            <SummaryCard />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductHeader() {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
          C
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            CliniSense
          </p>

          <p className="text-[11px] text-slate-400">
            Report intelligence
          </p>
        </div>
      </div>

      <AnalysisStatus />
    </div>
  );
}

function AnalysisStatus() {
  return (
    <motion.div
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400 sm:flex"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>

      Analysis ready
    </motion.div>
  );
}

function ReportCard() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-500 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400">
            RECENT REPORT
          </p>

          <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
            Complete Blood Count
          </h3>
        </div>

        <FileText size={19} className="text-slate-400" />
      </div>

      <div className="space-y-3">
        {reportValues.map((item) => (
          <ReportValue
            key={item.name}
            name={item.name}
            value={item.value}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ReportValue({ name, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-3 transition-colors duration-500 dark:bg-slate-900">
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
          {name}
        </p>

        <p className="mt-0.5 text-[11px] text-slate-400">
          {value}
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
        <Check size={13} />
        Normal
      </div>
    </div>
  );
}

function SummaryCard() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-500 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400">
            CLINICAL SUMMARY
          </p>

          <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
            What your report tells you
          </h3>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          <Sparkles size={17} />
        </div>
      </div>

      <SummaryPanel />

      <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition-colors duration-500 dark:border-slate-800">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Source: CBC_Report.pdf
        </span>

        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
          View report →
        </span>
      </div>
    </motion.div>
  );
}

function SummaryPanel() {
  return (
    <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white dark:bg-black">
      <div className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-400">
        <Activity size={14} />
        Report overview
      </div>

      <p className="text-sm leading-6 text-slate-200">
        Your report values have been extracted and organized into a clearer
        view, helping you review important information without scanning the
        original document line by line.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-slate-300">
          4 values extracted
        </span>

        <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-slate-300">
          Structured view
        </span>
      </div>
    </div>
  );
}

export default Hero;