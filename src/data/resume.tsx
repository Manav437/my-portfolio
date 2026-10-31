import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon, Database } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Express } from "@/components/ui/svgs/expressjs";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Javascript } from "@/components/ui/svgs/javascript";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { Github } from "@/components/ui/svgs/github";

export const DATA = {
    name: "Manav Gusain",
    initials: "MG",
    url: "https://manavtwt.vercel.app",
    location: "New Delhi",
    // locationLink: "https://www.google.com/maps/place/sanfrancisco",
    description: "",
    summary:
        "Software engineer specialising in full-stack web development with focus on performance, security, and scalability. Outside the IDE, I'm just a regular guy chasing rank in Valorant, keeping up with football, and tracking F1 race weekends.",
    avatarUrl: "/me.jpg",
    skills: [
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "JavaScript", icon: Javascript },
        { name: "Typescript", icon: Typescript },
        { name: "Node.js", icon: Nodejs },
        { name: "Express.js", icon: Express },
        { name: "MongoDB", icon: MongoDB },
        { name: "SQL", icon: Database },
        { name: "Tailwind CSS", icon: TailwindCSS },
        { name: "Github", icon: Github },
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        {
            href: "https://drive.google.com/file/d/12iCz9vniN8nmIK9A7MaVhVApBSy260XD/view?usp=sharing",
            icon: FileTextIcon,
            label: "Resume",
        },
    ],
    contact: {
        email: "manav.gussain@gmail.com",
        // tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/manav437",
                icon: Icons.github,
                navbar: true,
            },

            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/manav-gusain",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/manav437",
                icon: Icons.x,
                navbar: true,
            },
            // Youtube: {
            //     name: "Youtube",
            //     url: "https://dub.sh/dillion-youtube",
            //     icon: Icons.youtube,
            //     navbar: true,
            // },
            // email: {
            //     name: "Send Email",
            //     url: "#",
            //     icon: Icons.email,

            //     navbar: false,
            // },
        },
    },

    work: [
        {
            company: "BISAG-N",
            badges: [],
            location: "On-Site",
            title: "Software Engineer Intern",
            logoUrl: "/bisag.jpeg",
            start: "June 2025",
            end: "Aug 2025",
            description:
                "Built responsive React interfaces from Figma designs and developed 20+ reusable components to improve development efficiency. Optimised frontend performance by refining state management and reducing unnecessary re-renders, resulting in faster load times and a smoother user experience.",
        },
        // {
        //     company: "Shopify",
        //     badges: [],
        //     href: "https://shopify.com",
        //     location: "Remote",
        //     title: "Software Engineer",
        //     logoUrl: "/shopify.svg",
        //     start: "January 2021",
        //     end: "April 2021",
        //     description:
        //         "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
        // },
        // {
        //     company: "Nvidia",
        //     href: "https://nvidia.com/",
        //     badges: [],
        //     location: "Santa Clara, CA",
        //     title: "Software Engineer",
        //     logoUrl: "/nvidia.png",
        //     start: "January 2020",
        //     end: "April 2020",
        //     description:
        //         "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
        // },
        // {
        //     company: "Splunk",
        //     href: "https://splunk.com",
        //     badges: [],
        //     location: "San Jose, CA",
        //     title: "Software Engineer",
        //     logoUrl: "/splunk.svg",
        //     start: "January 2019",
        //     end: "April 2019",
        //     description:
        //         "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
        // },
        // {
        //     company: "Lime",
        //     href: "https://li.me/",
        //     badges: [],
        //     location: "San Francisco, CA",
        //     title: "Software Engineer",
        //     logoUrl: "/lime.svg",
        //     start: "January 2018",
        //     end: "April 2018",
        //     description:
        //         "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
        // },
        // {
        //     company: "Mitre Media",
        //     href: "https://mitremedia.com/",
        //     badges: [],
        //     location: "Toronto, ON",
        //     title: "Software Engineer",
        //     logoUrl: "/mitremedia.png",
        //     start: "May 2017",
        //     end: "August 2017",
        //     description:
        //         "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
        // },
    ],
    education: [
        {
            school: "Galgotias College of Engineering & Technology",
            href: "#",
            degree: "Bachelor of Technology",
            logoUrl: "/gcet.jpeg",
            start: "2022",
            end: "2026",
        },
    ],
    projects: [
        {
            title: "Pubby",
            href: "https://pubby-mu.vercel.app",
            active: true,
            description:
                "A music-sharing app where friends drop YouTube song links into a shared room and listen together in sync. Everyone can add tracks to the queue and chat in real time, while the host controls playback. Just share a room link to get started - no account needed.",
            technologies: [
                "Next.js",
                "TypeScript",
                "React",
                "Supabase",
                "PostgreSQL",
                "TailwindCSS",
                "YouTube IFrame API",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://pubby-mu.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Manav437/pubby",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/pubby.png",
        },
        {
            title: "0Password",
            href: "https://0password.vercel.app",
            active: true,
            description:
                "A zero-knowledge password manager with client-side AES-256-GCM encryption using the Web Crypto API - the server never sees your plaintext credentials. Master password stays on your device, always.",
            technologies: [
                "Next.js",
                "TypeScript",
                "React",
                "Supabase",
                "Clerk",
                "Web Crypto API",
                "TailwindCSS",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://0password.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/0password.png",
        },
        {
            title: "Team Tasks",
            href: "https://team-tasks-ljps.vercel.app",
            active: true,
            description:
                "A team task management app where managers can track their team's work in real time. Tasks support status tracking (Not Started, In Progress, Completed) and descriptions. Includes Gemini API integration to summarise a team's current workload at a glance.",
            technologies: [
                "Next.js",
                "TypeScript",
                "MongoDB",
                "Prisma",
                "TailwindCSS",
                "Google OAuth",
                "Gemini API",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://team-tasks-ljps.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Manav437/Team-Tasks",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/team-tasks.png",
        },
        // {
        //     title: "Huddle",
        //     href: "https://huddle-rosy-five.vercel.app/",
        //     active: true,
        //     description:
        //         "A social media app where users can post updates, chat with others, and customise their profiles. Built with real-time data sync via Firebase Firestore for a seamless, live experience.",
        //     technologies: [
        //         "React",
        //         "Vite",
        //         "TailwindCSS",
        //         "Firebase Firestore",
        //     ],
        //     links: [
        //         {
        //             type: "Website",
        //             href: "https://huddle-rosy-five.vercel.app",
        //             icon: <Icons.globe className="size-3" />,
        //         },
        //         {
        //             type: "Source",
        //             href: "https://github.com/Manav437/Huddle",
        //             icon: <Icons.github className="size-3" />,
        //         },
        //     ],
        //     image: "/huddle.png",
        // },
        {
            title: "Off Brand",
            href: "https://off-brand-sigma.vercel.app/",
            active: true,
            description:
                "A clean, animated landing page built to practise modern frontend fundamentals. Focuses on smooth UI animations and responsive layout.",
            technologies: ["Next.js", "TypeScript", "TailwindCSS"],
            links: [
                {
                    type: "Website",
                    href: "https://off-brand-sigma.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/off-brand.png",
        },
        // {
        //     title: "7TV for GitHub",
        //     href: "",
        //     active: false,
        //     description:
        //         "A browser extension that brings custom emotes to GitHub - think 7TV but for PRs, issues, and code reviews. Type and react with custom emojis right inside GitHub discussions.",
        //     technologies: ["Browser Extension"],
        //     links: [
        //         // {
        //         //     type: "Website",
        //         //     href: "",
        //         //     icon: <Icons.globe className="size-3" />,
        //         // },
        //     ],
        //     image: "/wip-img.png",
        // },
    ],
    hackathons: [] as {
        title: string;
        dates: string;
        location?: string;
        description?: string;
        image?: string;
        links?: { href: string; title: string; icon?: React.ReactNode }[];
    }[],
} as const;
