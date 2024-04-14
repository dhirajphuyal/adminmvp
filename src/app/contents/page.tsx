"use client"
import AsideNav from "@/components/common/AsideNav";
import SheetNav from "@/components/common/SheetNav";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Ban, Check, Delete, Eye, Search, Trash2, Users, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {useState} from "react";
import Alert from "@/components/common/AlertDialog";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import PostInformation from "@/app/contents/ViewContentInformation";


const contents = [
    {
        "title": "Craft beautiful retro logos for your company.",
        "description": "Craft beautiful retro logos for your company.",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "title": "Craft beautiful retro logos for your company.",
        "description": "Craft beautiful retro logos for your company.",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "title": "Craft beautiful retro logos for your company.",
        "description": "Craft beautiful retro logos for your company.",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "title": "Craft beautiful retro logos for your company.",
        "description": "Craft beautiful retro logos for your company.",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "title": "Craft beautiful retro logos for your company.",
        "description": "Craft beautiful retro logos for your company.",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "title": "Craft beautiful retro logos for your company.",
        "description": "Craft beautiful retro logos for your company.",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    }
]

const ContentPage = () => {
    const [viewUserInfo, setViewUserInfo] = useState(false);
    const [isActivePost, setIsActivePost] = useState(false);

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[235px_1fr]">
            <AsideNav activeIndex={4} />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <SheetNav title={"Content Management"} description={"View, edit and add sponsored contents."}/>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-5">
                        <div className={`grid auto-rows-max items-start gap-4 md:gap-8 ${viewUserInfo? "lg:col-span-3" : "lg:col-span-5"}`}>
                            <Tabs defaultValue="new">
                                <div className="flex flex-row items-center">
                                    <TabsList>
                                        <TabsTrigger value="new" onClick={() => {
                                            setViewUserInfo(false);
                                            setIsActivePost(false);
                                        }}>New</TabsTrigger>
                                        <TabsTrigger value="active" onClick={() => {
                                            setViewUserInfo(false);
                                            setIsActivePost(false);
                                        }}>Active</TabsTrigger>
                                    </TabsList>
                                    <div className="relative ml-auto flex-1 md:grow-0">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                                        <Input
                                            type="search"
                                            placeholder="Search..."
                                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                                        />
                                    </div>
                                </div>
                                <TabsContent value="new">
                                    <Card>
                                        <CardHeader className="px-7">
                                            <CardTitle>New Submissions</CardTitle>
                                            <CardDescription>
                                                New listings from the users.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Title</TableHead>
                                                        <TableHead>Description</TableHead>
                                                        <TableHead className="hidden sm:table-cell">
                                                            Type
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Submission Date
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">Actions</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {contents.map((post) => (
                                                        <TableRow className="" key={post.description}>
                                                            <TableCell className={"hidden sm:table-cell"}>
                                                                <div className="font-medium">{post.title}</div>
                                                            </TableCell>
                                                            <TableCell className={"hidden sm:table-cell"}>
                                                                {post.description}
                                                            </TableCell>
                                                            <TableCell className="hidden sm:table-cell">
                                                                {post.type}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {post.date}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                <Button size="sm" variant="outline"
                                                                        className="h-8 gap-1"
                                                                        onClick={() => setViewUserInfo(true)}>
                                                                    <Eye className="h-3.5 w-3.5"/>
                                                                    <span
                                                                        className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                                                    View
                                                            </span>
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="active">
                                    <Card>
                                        <CardHeader className="px-7">
                                            <CardTitle>Active Listings</CardTitle>
                                            <CardDescription>
                                                These listings are currently active on the platform.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Title</TableHead>
                                                        <TableHead>Description</TableHead>
                                                        <TableHead className="hidden sm:table-cell">
                                                            Type
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Date Published
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">Actions</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {contents.map((post) => (
                                                        <TableRow className="" key={post.description}>
                                                            <TableCell>
                                                                <div className="font-medium">{post.title}</div>
                                                            </TableCell>
                                                            <TableCell>
                                                                <div className="font-medium">{post.description}</div>
                                                            </TableCell>
                                                            <TableCell className="hidden sm:table-cell">
                                                                {post.type}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {post.date}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                <Button size="sm" variant="outline"
                                                                        className="h-8 gap-1"
                                                                        onClick={() => setViewUserInfo(true)}>
                                                                    <Eye className="h-3.5 w-3.5"/>
                                                                    <span
                                                                        className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                                                    View
                                                            </span>
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                        <div className={"grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2"}>
                            {viewUserInfo &&
                                <PostInformation />
                             }</div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ContentPage;