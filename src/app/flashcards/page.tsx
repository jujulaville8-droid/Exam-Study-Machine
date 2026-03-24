"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FlashCardDeck } from "@/components/flashcards/FlashCardDeck";
import { Layers } from "lucide-react";
import { flashcards } from "@/data/flashcards";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All Cards" },
  { key: "section", label: "Sections" },
  { key: "test", label: "Legal Tests" },
  { key: "case", label: "Cases" },
  { key: "concept", label: "Concepts" },
] as const;

export default function FlashcardsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return flashcards;
    return flashcards.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-14 h-14 mx-auto rounded-full border border-border flex items-center justify-center">
          <Layers className="w-6 h-6 text-primary" />
        </div>
        <h1 className="font-serif text-4xl italic">Flashcards</h1>
        <p className="text-sm text-muted-foreground">
          {flashcards.length} cards across Charter sections, legal tests, cases, and concepts
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {categories.map((cat) => {
          const count = cat.key === "all"
            ? flashcards.length
            : flashcards.filter((c) => c.category === cat.key).length;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-200",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
              )}
            >
              {cat.label}
              <span className="ml-1.5 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <FlashCardDeck
        cards={filtered}
        category={categories.find((c) => c.key === activeCategory)?.label ?? "All"}
      />
    </div>
  );
}
