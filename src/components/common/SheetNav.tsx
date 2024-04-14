import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Building2, Home, PanelLeft, Search, Settings, StickyNote, Users2} from "lucide-react";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface titleProps {
    "title"?: string;
    "description"?: string;
}

const SheetNav: React.FC<titleProps> = ({title, description}) => {
    return <header
        className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-5 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 mb-2">
        <div className={"px-1"}>
            <div className="grid gap-0.5">
                <p className="group flex items-center gap-2 text-lg sm:text-3xl font-bold">
                    {title}
                </p>
                <p className={"hidden sm:block"}>{description}</p>
            </div>
        </div>
        <div className="relative ml-auto flex-1 md:grow-0">
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                >
                    <Image
                        src={"/images/User.svg"}
                        width={36}
                        height={36}
                        alt="Avatar"
                        className="overflow-hidden"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>
}

export default SheetNav;