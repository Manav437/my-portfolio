export function BottomBlur() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-25"
            style={{
                background:
                    "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.15) 25%, hsl(var(--background) / 0.6) 65%, hsl(var(--background)) 100%)",
                backdropFilter: "blur(7px)",
                WebkitBackdropFilter: "blur(7px)",
                maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)",
                WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)",
            }}
        />
    );
}
