"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FlashCardDeck } from "@/components/flashcards/FlashCardDeck";
import { Layers } from "lucide-react";
import { flashcards } from "@/data/flashcards";
import { testThemes, getFlashcardsByTheme, getAdditionalFlashcards } from "@/data/themes";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All Cards" },
  { key: "section", label: "Sections" },
  { key: "test", label: "Legal Tests" },
  { key: "case", label: "Cases" },
  { key: "concept", label: "Concepts" },
] as const;

export default function FlashcardsPage() {
  const [activeTheme, setActiveTheme] = useState<string>("all");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const themeFiltered = useMemo(() => {
    if (activeTheme === "all") return flashcards;
    if (activeTheme === "additional") return getAdditionalFlashcards();
    const theme = testThemes.find((t) => t.id === activeTheme);
    if (theme) return getFlashcardsByTheme(theme.id);
    return flashcards;
  }, [activeTheme]);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return themeFiltered;
    return themeFiltered.filter((c) => c.category === activeCategory);
  }, [activeCategory, themeFiltered]);

  const activeLabel = activeTheme === "all"
    ? (categories.find((c) => c.key === activeCategory)?.label ?? "All")
    : activeTheme === "additional"
      ? "Additional Learning"
      : testThemes.find((t) => t.id === activeTheme)?.title ?? "All";

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

      {/* Theme Filter */}
      <div className="space-y-3">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold text-center">
          Theme
        </p>
        <div className="flex flex-wrap justify-center gap-1.5">
          <button
            onClick={() => { setActiveTheme("all"); setActiveCategory("all"); }}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200",
              activeTheme === "all"
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 font-medium"
                : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
            )}
          >
            All
          </button>
          {testThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => { setActiveTheme(theme.id); setActiveCategory("all"); }}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200",
                activeTheme === theme.id
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 font-medium"
                  : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
              )}
            >
              {theme.number}. {theme.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
          <button
            onClick={() => { setActiveTheme("additional"); setActiveCategory("all"); }}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200",
              activeTheme === "additional"
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 font-medium"
                : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
            )}
          >
            Additional
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {categories.map((cat) => {
          const count = cat.key === "all"
            ? themeFiltered.length
            : themeFiltered.filter((c) => c.category === cat.key).length;
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

      <FlashCardDeck cards={filtered} category={activeLabel} />
    </div>
  );
}
