import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav className="sticky top-0 z-50 border-b border-border-subtle bg-ink-950/70 backdrop-blur-lg">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 py-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="inline-flex min-h-[44px] items-center rounded-md font-display text-lg font-bold tracking-tight text-text-primary transition-colors duration-200 hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          Rodrigo German
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text-primary transition-colors duration-200 hover:bg-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>

        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-premium motion-reduce:transition-none md:max-h-none md:w-auto md:overflow-visible md:opacity-100 ${
            isOpen ? "mt-3 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0 md:mt-0"
          }`}
          id="navbar-default"
        >
          <div className="rounded-xl border border-border-subtle bg-ink-900/95 p-2 backdrop-blur-lg md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
            <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
              {links.map((link, index) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className={`relative flex min-h-[44px] items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                        isActive
                          ? "text-text-primary"
                          : "text-text-secondary hover:text-text-primary hover:bg-ink-700/60"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-underline"
                          className="absolute inset-x-4 -bottom-px hidden h-[2px] rounded-full bg-brand-400 md:block"
                          transition={
                            shouldReduceMotion
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 380, damping: 32 }
                          }
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
