export function BottomBlur() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-[calc(8rem+env(safe-area-inset-bottom))]"
            style={{
                background:
                    "linear-gradient(to bottom, transparent, color-mix(in oklch, var(--background) 55%, transparent) 65%, var(--background))",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                maskImage:
                    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.65) 60%, black)",
                WebkitMaskImage:
                    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.65) 60%, black)",
            }}
        />
    );
}
