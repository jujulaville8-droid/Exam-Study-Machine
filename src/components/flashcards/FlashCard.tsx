"use client";

import { motion } from "framer-motion";

export function FlashCard({
  front,
  back,
  isFlipped,
  onFlip,
}: {
  front: string;
  back: string;
  isFlipped: boolean;
  onFlip: () => void;
}) {
  return (
    <div
      className="relative w-full max-w-xl mx-auto cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={onFlip}
    >
      <motion.div
        className="relative w-full min-h-[320px]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-border bg-surface p-10 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Question
          </p>
          <p className="font-serif text-2xl italic leading-relaxed">
            {front}
          </p>
          <p className="text-[10px] text-muted-foreground mt-6 tracking-wider uppercase">
            tap to reveal
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border border-primary/20 bg-primary/[0.03] p-10 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-4">
            Answer
          </p>
          <p className="text-sm leading-relaxed whitespace-pre-line max-w-md">
            {back}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
