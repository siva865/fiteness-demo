import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Dumbbell,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setProgramsOpen(false);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6">
        <nav
          className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-4 py-3 transition-all duration-300 md:px-5 ${
            scrolled
              ? "border border-white/10 bg-[#0F2421]/90 shadow-2xl backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAFB7B] text-[#0F2421]">
              <Dumbbell size={18} strokeWidth={2.5} />
            </span>

            <div className="leading-none">
              <div className="font-display text-lg font-semibold tracking-wide text-white">
                KALKI
              </div>
              <div className="mt-1 text-[8px] tracking-[0.28em] text-[#C5CFC8]">
                FITNESS STUDIO
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 rounded-full bg-[rgba(215,222,212,.9)] p-1 text-[#1F3A34] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-5 py-2.5 text-sm transition hover:bg-white/70"
              >
                {item.label}
              </a>
            ))}

            <div className="relative">
              <button
                onClick={() => setProgramsOpen((v) => !v)}
                className="flex items-center gap-1 rounded-full px-5 py-2.5 text-sm transition hover:bg-white/70"
              >
                Classes
                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {programsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-1/2 top-[calc(100%+12px)] w-52 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#1A2E2B] p-2 text-white shadow-2xl"
                  >
                    {["Strength Training", "HIIT", "Yoga & Mobility"].map(
                      (item) => (
                        <a
                          key={item}
                          href="#programs"
                          onClick={() => setProgramsOpen(false)}
                          className="block rounded-xl px-4 py-3 text-sm text-[#C5CFC8] transition hover:bg-white/5 hover:text-[#EAFB7B]"
                        >
                          {item}
                        </a>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="rounded-full px-5 py-2.5 text-sm transition hover:bg-white/70"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="lime-button hidden rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1F3A34] lg:block"
          >
            Start Training
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-[76px] z-40 rounded-3xl border border-white/10 bg-[#132A27]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1">
              <a
                href="#about"
                onClick={closeMenu}
                className="block rounded-2xl px-5 py-4 text-base text-[#F4F4EE] transition hover:bg-white/5"
              >
                About
              </a>

              <a
                href="#programs"
                onClick={closeMenu}
                className="block rounded-2xl px-5 py-4 text-base text-[#F4F4EE] transition hover:bg-white/5"
              >
                Programs
              </a>

              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="block rounded-2xl px-5 py-4 text-base text-[#F4F4EE] transition hover:bg-white/5"
              >
                How It Works
              </a>

              <a
                href="#testimonials"
                onClick={closeMenu}
                className="block rounded-2xl px-5 py-4 text-base text-[#F4F4EE] transition hover:bg-white/5"
              >
                Results
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-2xl px-5 py-4 text-base text-[#F4F4EE] transition hover:bg-white/5"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 block rounded-2xl bg-[#EAFB7B] px-5 py-4 text-center font-medium text-[#0F2421]"
              >
                Start Training
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}