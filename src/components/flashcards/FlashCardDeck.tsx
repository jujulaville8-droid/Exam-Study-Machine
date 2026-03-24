"use client";

import { useState, useCallback, useEffect } from "react";
import { FlashCard } from "./FlashCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw } from "lucide-react";
import { shuffleArray } from "@/lib/spaced-repetition";
import type { Flashcard } from "@/types";

export function FlashCardDeck({
  cards,
  category,
}: {
  cards: Flashcard[];
  category: string;
}) {
  const [deck, setDeck] = useState(cards);
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setDeck(cards);
    setIndex(0);
    setIsFlipped(false);
  }, [cards]);

  const current = deck[index];

  const next = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => setIndex((i) => Math.min(i + 1, deck.length - 1)), 200);
  }, [deck.length]);

  const prev = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => setIndex((i) => Math.max(i - 1, 0)), 200);
  }, []);

  const handleShuffle = useCallback(() => {
    setDeck(shuffleArray(deck));
    setIndex(0);
    setIsFlipped(false);
  }, [deck]);

  const reset = useCallback(() => {
    setDeck(cards);
    setIndex(0);
    setIsFlipped(false);
  }, [cards]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setIsFlipped((f) => !f);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  if (!current) {
    return (
      <div className="text-center py-16 text-muted-foreground font-serif italic text-lg">
        No cards in this category.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <span className="text-sm tabular-nums text-muted-foreground">
          <span className="text-foreground font-medium">{index + 1}</span>
          <span className="mx-1">/</span>
          {deck.length}
        </span>
        <Badge variant="outline">{category}</Badge>
      </div>

      <FlashCard
        front={current.front}
        back={current.back}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped((f) => !f)}
      />

      <p className="text-center text-[10px] text-muted-foreground tracking-wider uppercase">
        Space to flip · Arrow keys to navigate
      </p>

      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="sm" onClick={prev} disabled={index === 0}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={handleShuffle}>
          <Shuffle className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={reset}>
          <RotateCcw className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={next} disabled={index === deck.length - 1}>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
