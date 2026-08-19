import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-900/85 sm:px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
            C
          </div>

          <span className="text-[15px] font-semibold tracking-tight text-slate-950 dark:text-white">
            CliniSense
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#product"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
          >
            Product
          </a>

          <a
            href="#workflow"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
          >
            How it works
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
          >
            Features
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="relative flex h-10 w-[72px] items-center rounded-full border border-slate-200 bg-slate-100 p-1 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800"
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <span
              className={`absolute flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 dark:bg-slate-950 ${
                darkMode ? "translate-x-8" : "translate-x-0"
              }`}
            >
              {darkMode ? (
                <Moon size={15} className="text-blue-300" />
              ) : (
                <Sun size={15} className="text-amber-500" />
              )}
            </span>

            <span className="flex w-full items-center justify-between px-1.5">
              <Sun
                size={14}
                className={
                  darkMode
                    ? "text-slate-500"
                    : "text-amber-500 opacity-0"
                }
              />

              <Moon
                size={14}
                className={
                  darkMode
                    ? "text-slate-300"
                    : "text-slate-400"
                }
              />
            </span>
          </button>

          <a
            href="#get-started"
            className="group flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Explore product

            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Moon size={17} className="text-blue-300" />
            ) : (
              <Sun size={17} className="text-amber-500" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition dark:border-slate-700 dark:text-slate-200"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200 bg-white p-3 shadow-lg transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <a
            href="#product"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Product
          </a>

          <a
            href="#workflow"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            How it works
          </a>

          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Features
          </a>

          <a
            href="#get-started"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition dark:bg-white dark:text-slate-950"
          >
            Explore product

            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;