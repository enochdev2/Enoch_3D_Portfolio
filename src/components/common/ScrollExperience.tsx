import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollExperience() {
  const shouldReduceMotion = useReducedMotion();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 640);
  });

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-orange-600 via-amber-300 to-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.7)]"
        style={{ scaleX: shouldReduceMotion ? scrollYProgress : progress }}
      />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            aria-label="Scroll back to top"
            title="Back to top"
            initial={{ opacity: 0, y: 16, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.85 }}
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.06 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: shouldReduceMotion ? "auto" : "smooth",
              })
            }
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-orange-300/30 bg-zinc-950/85 text-orange-300 shadow-[0_8px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-colors hover:border-orange-300/70 hover:bg-orange-500 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <ArrowUp size={19} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
