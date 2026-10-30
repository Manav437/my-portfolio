import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipArrow,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 px-3">
            <Dock className="pointer-events-auto relative h-14 w-fit gap-1 border-border/70 bg-card/80 p-1.5 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                {DATA.navbar.map((item) => {
                    const isExternal = item.href.startsWith("http");
                    return (
                        <Tooltip key={item.href}>
                            <TooltipTrigger asChild>
                                <a
                                    aria-label={item.label}
                                    className="group rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    href={item.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                >
                                    <DockIcon className="text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground group-focus-visible:bg-muted group-focus-visible:text-foreground">
                                        <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                                    </DockIcon>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent
                                side="top"
                                sideOffset={8}
                                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                            >
                                <p>{item.label}</p>
                                <TooltipArrow className="fill-primary" />
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
                <Separator
                    orientation="vertical"
                    className="h-2/3 m-auto w-px bg-border"
                />
                {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social], index) => {
                        const isExternal = social.url.startsWith("http");
                        const IconComponent = social.icon;
                        return (
                            <Tooltip key={`social-${name}-${index}`}>
                                <TooltipTrigger asChild>
                                    <a
                                        aria-label={name}
                                        className="group rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        href={social.url}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                    >
                                        <DockIcon className="text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground group-focus-visible:bg-muted group-focus-visible:text-foreground">
                                            <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                                        </DockIcon>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="top"
                                    sideOffset={8}
                                    className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                                >
                                    <p>{name}</p>
                                    <TooltipArrow className="fill-primary" />
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                <Separator
                    orientation="vertical"
                    className="h-2/3 m-auto w-px bg-border"
                />
                <Tooltip>
                    <TooltipTrigger asChild>
                        <ModeToggle className="size-10 cursor-pointer text-muted-foreground hover:text-foreground" />
                    </TooltipTrigger>
                    <TooltipContent
                        side="top"
                        sideOffset={8}
                        className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                    >
                        <p>Theme</p>
                        <TooltipArrow className="fill-primary" />
                    </TooltipContent>
                </Tooltip>
            </Dock>
        </div>
    );
}
