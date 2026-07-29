"use client";

import { useEffect, useState } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const QUOTES = [
    // Breaking Bad
    { text: "Yeah, science!", from: "Jesse Pinkman", show: "Breaking Bad" },
    { text: "I did it for me. I liked it. I was good at it. And I was really alive.", from: "Walter White", show: "Breaking Bad" },

    // Better Call Saul
    { text: "It's all good, man.", from: "Jimmy McGill", show: "Better Call Saul" },
    { text: "I know what stopped me. And you know what? It's never stopping me again.", from: "Jimmy McGill", show: "Better Call Saul" },
    { text: "Just because you can't see it doesn't mean it isn't there.", from: "Mike Ehrmantraut", show: "Better Call Saul" },

    // The Sopranos
    { text: "Those who want respect, give respect.", from: "Tony Soprano", show: "The Sopranos" },
    { text: "A wrong decision is better than indecision.", from: "Tony Soprano", show: "The Sopranos" },

    // Peaky Blinders
    { text: "By order of the Peaky Blinders.", from: "Tommy Shelby", show: "Peaky Blinders" },
    { text: "I'm not a traitor to my class. I am just an extreme example of what a working man can achieve.", from: "Tommy Shelby", show: "Peaky Blinders" },

    // Dexter
    { text: "The only real question is, have you ever tried to make yourself stop?", from: "Dexter Morgan", show: "Dexter" },

    // Haikyuu
    { text: "The only one who can beat me is me.", from: "Tobio Kageyama", show: "Haikyuu!!" },
    { text: "If you're going to hit it, hit it till it breaks.", from: "Shoyo Hinata", show: "Haikyuu!!" },
    { text: "A game isn't over until it's over.", from: "Keishin Ukai", show: "Haikyuu!!" },

    // Slam Dunk
    { text: "I just started playing basketball.", from: "Hanamichi Sakuragi", show: "Slam Dunk" },
    { text: "No basketball, no life.", from: "Hanamichi Sakuragi", show: "Slam Dunk" },

    // Jujutsu Kaisen
    { text: "Don't worry, I'm the strongest.", from: "Satoru Gojo", show: "Jujutsu Kaisen" },
    { text: "Dying and killing aren't the same thing.", from: "Kento Nanami", show: "Jujutsu Kaisen" },
    { text: "No matter what, keep moving forward.", from: "Yuji Itadori", show: "Jujutsu Kaisen" },
];

export default function ContactSection() {
    const [quote, setQuote] = useState<typeof QUOTES[number] | null>(null);

    useEffect(() => {
        setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    }, []);

    return (
        <div className="border rounded-xl p-10 relative">
            <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
                <span className="text-background text-sm font-medium">Random</span>
            </div>
            <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
                <FlickeringGrid
                    className="h-full w-full"
                    squareSize={2}
                    gridGap={2}
                    style={{
                        maskImage: "linear-gradient(to bottom, black, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                    }}
                />
            </div>
            <div className="relative flex flex-col items-center gap-4 text-center">
                {quote && (
                    <>
                        <p className="mx-auto max-w-lg text-lg sm:text-xl font-semibold tracking-tight text-balance">
                            &ldquo;{quote.text}&rdquo;
                        </p>
                        <p className="text-sm text-muted-foreground italic">{quote.show}</p>
                    </>
                )}
            </div>
        </div>
    );
}
