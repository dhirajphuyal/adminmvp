import Link from "next/link";
import {
    Building2,
    Home,
    Settings,
    StickyNote,
    Users2,
    FileText,
    CircleFadingPlus,
    NotebookText,
    Users
} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import React from "react";
import {Badge} from "@/components/ui/badge";

interface AsideNavProps {
    activeIndex: number;
}

const  AsideNav: React.FC<AsideNavProps> = ({activeIndex}) => {
    return <>
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="fixed flex h-full max-h-screen flex-col gap-2 ">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Building2 className="h-6 w-6"/>
                        <span className="">MiddleMan</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Link
                            href="/dashboard"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activeIndex === 0 ? "text-primary bg-muted" : "text-black"}`}
                        >
                            <Home className="h-4 w-4"/>
                            Dashboard
                        </Link>
                        <Link
                            href="/documents"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activeIndex === 1 ? "text-primary bg-muted" : "text-black"}`}
                        >
                            <NotebookText className="h-4 w-4"/>
                            Document Verification
                        </Link>
                        <Link
                            href="/users"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activeIndex === 2 ? "text-primary bg-muted" : "text-black"}`}
                        >
                            <Users className="h-4 w-4"/>
                            User Management
                        </Link>
                        <Link
                            href="/promotionalposts"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activeIndex === 3 ? "text-primary bg-muted" : "text-black"}`}
                        >
                            <StickyNote className="h-4 w-4"/>
                            Posts Management
                        </Link>
                        <Link
                            href="/contents"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activeIndex === 4 ? "text-primary bg-muted" : "text-black"}`}
                        >
                            <CircleFadingPlus className="h-4 w-4"/>
                            Content Management
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Link
                        href="#"
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${activeIndex === 5 ? "text-primary bg-muted" : "text-black"}`}
                    >
                        <Settings className="h-4 w-4"/>
                        Settings
                    </Link>
                </div>
            </div>
        </div>
    </>;
}

export default AsideNav;