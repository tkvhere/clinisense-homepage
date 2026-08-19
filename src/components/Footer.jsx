function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 transition-colors duration-500 dark:border-slate-800 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
            C
          </div>

          <span className="text-sm font-semibold text-slate-900 dark:text-white">
            CliniSense
          </span>
        </div>

        <p className="text-xs text-slate-400">
          Clinical intelligence, made clearer.
        </p>

        <p className="text-xs text-slate-400">
          © 2026 CliniSense
        </p>
      </div>
    </footer>
  );
}

export default Footer;