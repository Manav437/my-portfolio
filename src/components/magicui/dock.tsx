import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
}

const Dock = ({ className, children }: DockProps) => (
  <nav aria-label="Main navigation" className={cn(
    "mx-auto flex w-max items-center justify-center rounded-full border",
    className
  )}>
    {children}
  </nav>
);

const DockIcon = ({ className, children }: DockIconProps) => (
  <div className={cn("relative flex size-10 shrink-0 items-center justify-center rounded-full", className)}>
    <div className="flex size-5 items-center justify-center">{children}</div>
  </div>
);

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
