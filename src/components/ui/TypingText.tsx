import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type TypingTextProps = {
  words: string[];
  prefix?: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function TypingText({
  words,
  prefix = "I'm a ",
  className = "",
  typingSpeed = 90,
  deletingSpeed = 55,
  pauseMs = 1600,
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex] ?? "";
    const isComplete = !isDeleting && display === current;
    const isEmpty = isDeleting && display === "";

    let timeout = typingSpeed;

    if (isComplete) {
      timeout = pauseMs;
    } else if (isDeleting) {
      timeout = deletingSpeed;
    }

    const timer = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const nextLength = display.length + (isDeleting ? -1 : 1);
      setDisplay(current.slice(0, nextLength));
    }, timeout);

    return () => window.clearTimeout(timer);
  }, [
    deletingSpeed,
    display,
    isDeleting,
    pauseMs,
    typingSpeed,
    wordIndex,
    words,
  ]);

  return (
    <span className={className}>
      {prefix}
      <AnimatePresence mode="wait">
        <motion.span
          key={display}
          initial={{ opacity: 0.65 }}
          animate={{ opacity: 1 }}
          className="text-accent"
        >
          {display}
        </motion.span>
      </AnimatePresence>
      <motion.span
        aria-hidden
        className="ml-0.5 inline-block text-accent"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      >
        |
      </motion.span>
    </span>
  );
}
