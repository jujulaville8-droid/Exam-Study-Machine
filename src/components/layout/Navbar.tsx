"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Brain, Layers, LayoutDashboard, GitMerge, BookOpen, Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: LayoutDashboard },
  { href: "/themes", label: "Themes", icon: BookOpen },
  { href: "/review", label: "Review", icon: Zap },
  { href: "/scenarios", label: "Scenarios", icon: Scale },
  { href: "/quiz", label: "Quiz", icon: Brain },
  { href: "/flashcards", label: "Cards", icon: Layers },
  { href: "/match", label: "Match", icon: GitMerge },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-20 items-center justify-between px-8 bg-background/70 backdrop-blur-2xl border-b border-border">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="font-serif text-primary-foreground text-lg italic">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl italic tracking-tight leading-none">
              Study Machine
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
              SOSC 3360
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-0.5">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-sm tracking-wide transition-colors",
                  active
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        <ThemeToggle />
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-t border-border">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-2.5 py-2 text-[10px] font-medium uppercase tracking-wider transition-colors",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              >
                <item.icon className={cn("w-5 h-5", active && "stroke-[2.5]")} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
