import Link from "next/link";
import {Building2, Home, Settings, StickyNote, Users2, FileText, CircleFadingPlus} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import React from "react";

interface AsideNavProps {
    activeIndex: number;
}

const  AsideNav: React.FC<AsideNavProps> = ({activeIndex}) => {
    return <>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <div
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Building2 className="h-4 w-4 transition-all group-hover:scale-110"/>
                    <span className="sr-only">Upwork</span>
                </div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeIndex === 0 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                            >
                                <Home className="h-5 w-5"/>
                                <span className="sr-only">Dashboard</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/documents"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeIndex === 1 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                            >
                                <FileText className="h-5 w-5"/>
                                <span className="sr-only">Document Verification</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Verify Documents</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/users"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeIndex === 2 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                            >
                                <Users2 className="h-5 w-5"/>
                                <span className="sr-only">Users</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Manage Users</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/contents"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeIndex === 3 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                            >
                                <CircleFadingPlus className="h-5 w-5"/>
                                <span className="sr-only">Posts</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Manage Contents</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/posts"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeIndex === 4 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                            >
                                <StickyNote className="h-5 w-5"/>
                                <span className="sr-only">Posts</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Manage Contents</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/settings"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeIndex === 5 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                            >
                                <Settings className="h-5 w-5"/>
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    </>;
}

export default AsideNav;