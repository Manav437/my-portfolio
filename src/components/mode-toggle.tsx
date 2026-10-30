"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useRef, type MouseEvent } from "react";
import { flushSync } from "react-dom";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const transitioning = useRef(false);

  const toggleTheme = async (event: MouseEvent<HTMLButtonElement>) => {
    if (transitioning.current) return;
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    transitioning.current = true;
    document.documentElement.classList.add("theme-transition");

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme));
    });

    try {
      await transition.ready;
      await document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" }
      ).finished;
    } catch {
      // A skipped transition still applies the selected theme.
    } finally {
      await transition.finished.catch(() => {});
      document.documentElement.classList.remove("theme-transition");
      transitioning.current = false;
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle color theme"
      className={cn("relative", className)}
      onClick={toggleTheme}
    >
      <SunIcon className="size-5 hidden dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </Button>
  );
}
