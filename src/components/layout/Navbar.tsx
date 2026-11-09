import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Container from "../ui/Container";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const shouldReduceMotion = useReducedMotion();
  const { pathname } = useLocation();

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 20);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    if (pathname !== "/") {
      setActiveSection("");
      return () => window.removeEventListener("scroll", updateScrollState);
    }

    const sectionElements = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]?.target instanceof HTMLElement) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.07] bg-zinc-950/85 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative py-3 text-sm transition-colors duration-300 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="active-navigation-indicator"
                      className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  ) : (
                    <span className="absolute inset-x-0 -bottom-px h-px origin-center scale-x-0 bg-orange-400/70 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-zinc-200 transition hover:border-orange-400/40 hover:bg-orange-400/10 md:hidden"
          >
            <Menu size={22} />
          </button>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
