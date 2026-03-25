"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, ArrowRight, Archive } from "lucide-react";
import { testThemes, getThemeContentCounts, getAdditionalContentCounts } from "@/data/themes";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ThemesPage() {
  const additionalCounts = getAdditionalContentCounts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 pt-8"
      >
        <div className="w-14 h-14 mx-auto rounded-full border border-border flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl italic">Test Themes</h1>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          The 6 themes covered on the March 30 final. Each theme contains relevant
          flashcards, quiz questions, scenarios, and Charter section breakdowns.
        </p>
      </motion.div>

      {/* Theme Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid gap-5 md:grid-cols-2"
      >
        {testThemes.map((theme) => {
          const counts = getThemeContentCounts(theme.id);
          return (
            <motion.div key={theme.id} variants={fadeUp}>
              <Link href={`/themes/${theme.id}`} className="group block h-full">
                <Card className="h-full relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="default">Theme {theme.number}</Badge>
                    <div className="flex gap-1.5">
                      {counts.flashcards > 0 && (
                        <Badge variant="outline">{counts.flashcards} cards</Badge>
                      )}
                      {counts.quizQuestions > 0 && (
                        <Badge variant="outline">{counts.quizQuestions} Qs</Badge>
                      )}
                      {counts.scenarios > 0 && (
                        <Badge variant="outline">{counts.scenarios} scenarios</Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {theme.subtitle}
                  </p>
                  <h2 className="font-serif text-xl italic mb-3 group-hover:text-primary transition-colors">
                    {theme.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {theme.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Study this theme
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Additional Learning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/themes/additional" className="group block">
          <div className="p-5 rounded-2xl border border-dashed border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Archive className="w-5 h-5 text-muted-foreground" />
                <div>
                  <h3 className="font-serif text-lg italic group-hover:text-primary transition-colors">
                    Additional Learning
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Topics beyond the 6 test themes — useful for broader understanding
                  </p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <Badge variant="outline">{additionalCounts.flashcards} cards</Badge>
                <Badge variant="outline">{additionalCounts.quizQuestions} Qs</Badge>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
