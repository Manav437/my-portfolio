"use client";

import { useEffect, useState } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const QUOTES = [
    // Christopher Nolan films
    { text: "Why do we fall, sir? So that we can learn to pick ourselves up.", from: "Alfred Pennyworth", show: "Batman Begins" },
    { text: "It's not who I am underneath, but what I do that defines me.", from: "Batman", show: "Batman Begins" },
    { text: "You either die a hero or live long enough to see yourself become the villain.", from: "Harvey Dent", show: "The Dark Knight" },
    { text: "Some men just want to watch the world burn.", from: "Alfred Pennyworth", show: "The Dark Knight" },
    { text: "The night is darkest just before the dawn.", from: "Harvey Dent", show: "The Dark Knight" },
    { text: "Don't be afraid to dream a little bigger, darling.", from: "Eames", show: "Inception" },
    { text: "You mustn't be afraid to dream a little bigger, darling.", from: "Eames", show: "Inception" },
    { text: "We used to look up at the sky and wonder at our place in the stars.", from: "Cooper", show: "Interstellar" },
    { text: "Love is the one thing we're capable of perceiving that transcends dimensions of time and space.", from: "Amelia Brand", show: "Interstellar" },
    { text: "Do not go gentle into that good night.", from: "Professor Brand", show: "Interstellar" },

    // Martin Scorsese films
    { text: "As far back as I can remember, I always wanted to be a gangster.", from: "Henry Hill", show: "Goodfellas" },
    { text: "Funny how? I mean, funny like I'm a clown?", from: "Tommy DeVito", show: "Goodfellas" },
    { text: "You talkin' to me?", from: "Travis Bickle", show: "Taxi Driver" },
    { text: "I never wanted to be a product of my environment. I wanted my environment to be a product of me.", from: "Frank Costello", show: "The Departed" },
    { text: "How do you like them apples?", from: "Billy Costigan", show: "The Departed" },
    { text: "The saddest thing in life is wasted talent.", from: "Lorenzo Anello", show: "A Bronx Tale" },

    // The Wire
    // { text: "The game is the game.", from: "Various characters", show: "The Wire" },
    // { text: "All in the game, yo. All in the game.", from: "Omar Little", show: "The Wire" },

    // Mr. Robot
    // { text: "Hello, friend.", from: "Elliot Alderson", show: "Mr. Robot" },
    // { text: "Control is an illusion.", from: "Mr. Robot", show: "Mr. Robot" },

    // True Detective
    { text: "Time is a flat circle.", from: "Rust Cohle", show: "True Detective" },
    { text: "The world needs bad men. We keep the other bad men from the door.", from: "Rust Cohle", show: "True Detective" },

    // Game of Thrones
    // { text: "When you play the game of thrones, you win or you die.", from: "Cersei Lannister", show: "Game of Thrones" },
    // { text: "A lion doesn't concern himself with the opinions of a sheep.", from: "Tywin Lannister", show: "Game of Thrones" },
    // { text: "The things I do for love.", from: "Jaime Lannister", show: "Game of Thrones" },
    // { text: "Chaos isn't a pit. Chaos is a ladder.", from: "Petyr Baelish", show: "Game of Thrones" },
    // { text: "Winter is coming.", from: "House Stark", show: "Game of Thrones" },

    // The Office
    // { text: "I am Beyoncé, always.", from: "Michael Scott", show: "The Office" },
    // { text: "Identity theft is not a joke, Jim!", from: "Dwight Schrute", show: "The Office" },
    // { text: "Would I rather be feared or loved? Easy. Both.", from: "Michael Scott", show: "The Office" },

    // Sherlock
    // { text: "I am not a psychopath, Anderson. I'm a high-functioning sociopath.", from: "Sherlock Holmes", show: "Sherlock" },
    // { text: "The game is on.", from: "Sherlock Holmes", show: "Sherlock" },

    // Attack on Titan
    { text: "If you win, you live. If you lose, you die. If you don't fight, you can't win!", from: "Eren Yeager", show: "Attack on Titan" },
    { text: "Give up on your dreams and die.", from: "Levi Ackerman", show: "Attack on Titan" },
    { text: "The only thing we're allowed to do is believe that we won't regret the choice we made.", from: "Levi Ackerman", show: "Attack on Titan" },
    { text: "A person who cannot sacrifice everything cannot change anything.", from: "Armin Arlert", show: "Attack on Titan" },

    // Vinland Saga
    { text: "You have no enemies. No one has any enemies.", from: "Thors", show: "Vinland Saga" },
    { text: "I have no enemies.", from: "Thorfinn", show: "Vinland Saga" },

    // Naruto
    // { text: "Those who break the rules are scum, but those who abandon their friends are worse than scum.", from: "Obito Uchiha", show: "Naruto" },
    // { text: "Hard work is worthless for those that don't believe in themselves.", from: "Naruto Uzumaki", show: "Naruto" },

    // One Piece
    { text: "If you don't take risks, you can't create a future.", from: "Monkey D. Luffy", show: "One Piece" },
    { text: "When do you think people die? When they are forgotten.", from: "Dr. Hiriluk", show: "One Piece" },

    // Death Note
    { text: "I'll take a potato chip... and eat it!", from: "Light Yagami", show: "Death Note" },
    { text: "In this world, there are very few people who actually trust each other.", from: "L", show: "Death Note" },

    // Cowboy Bebop
    { text: "Whatever happens, happens.", from: "Spike Spiegel", show: "Cowboy Bebop" },
    { text: "I'm not going there to die. I'm going to find out if I'm really alive.", from: "Spike Spiegel", show: "Cowboy Bebop" },

    // The Matrix
    // { text: "There is no spoon.", from: "Spoon Boy", show: "The Matrix" },
    // { text: "Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.", from: "Morpheus", show: "The Matrix" },
    // { text: "I know kung fu.", from: "Neo", show: "The Matrix" },

    // Fight Club
    { text: "The first rule of Fight Club is: you do not talk about Fight Club.", from: "Tyler Durden", show: "Fight Club" },
    { text: "It's only after we've lost everything that we're free to do anything.", from: "Tyler Durden", show: "Fight Club" },
    { text: "This is your life, and it's ending one minute at a time.", from: "Tyler Durden", show: "Fight Club" },

    // Whiplash
    { text: "There are no two words in the English language more harmful than 'good job'.", from: "Terence Fletcher", show: "Whiplash" },

    // The Shawshank Redemption
    { text: "Get busy living, or get busy dying.", from: "Andy Dufresne", show: "The Shawshank Redemption" },
    { text: "Hope is a good thing, maybe the best of things.", from: "Andy Dufresne", show: "The Shawshank Redemption" },

    // The Godfather
    // { text: "I'm gonna make him an offer he can't refuse.", from: "Vito Corleone", show: "The Godfather" },
    // { text: "It's not personal, Sonny. It's strictly business.", from: "Michael Corleone", show: "The Godfather" },

    // Pulp Fiction
    { text: "The path of the righteous man is beset on all sides.", from: "Jules Winnfield", show: "Pulp Fiction" },
    { text: "Zed's dead, baby. Zed's dead.", from: "Butch Coolidge", show: "Pulp Fiction" },

    // The Social Network
    { text: "A million dollars isn't cool. You know what's cool? A billion dollars.", from: "Sean Parker", show: "The Social Network" },

    // Dune
    // { text: "Fear is the mind-killer.", from: "Paul Atreides", show: "Dune" },
    // { text: "The mystery of life isn't a problem to solve, but a reality to experience.", from: "Reverend Mother", show: "Dune" },


    // Lanterns (2026)
    // { text: "In brightest day, in darkest night, I'll embrace my fear. I'll do what's right. I choose this ring. I choose this fight, in service to this lantern's light.", from: "John Stewart", show: "Lanterns" },
    { text: "This ring? It's the greatest weapon in the universe.", from: "Hal Jordan", show: "Lanterns" },
    { text: "When and if to use it, that's the whole ballgame, Junior.", from: "Hal Jordan", show: "Lanterns" },
    // { text: "Power like that, shouldn't you have to work for it?", from: "John Stewart", show: "Lanterns" },

];

export default function ContactSection() {
    const [quote, setQuote] = useState<typeof QUOTES[number] | null>(null);

    useEffect(() => {
        setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    }, []);

    return (
        <div className="border rounded-xl p-10 relative mb-10">
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
