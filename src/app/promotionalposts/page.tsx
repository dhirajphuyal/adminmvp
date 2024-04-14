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
import {useToast} from "@/components/ui/use-toast";

import ActivePostInformation from "@/app/promotionalposts/ViewActivePostInformation";
import PendingPostInformation from "@/app/promotionalposts/ViewPendingPostInformation";


const promotionalPosts = [
    {
        "username": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "position": "UI/UX Design",
        "title" : "Craft beautiful retro logos for your company.",
        "date": "2023-06-23",
        "rate": "1000",
        "tags": ["graphic designing", "ui/ux", "figma"]
    },
    {
        "username": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "position": "UI/UX Design",
        "title" : "Craft beautiful retro logos for your company.",
        "date": "2023-06-23",
        "rate": "1000",
        "tags": ["graphic designing", "ui/ux", "figma"]
    },
    {
        "username": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "position": "UI/UX Design",
        "title" : "Craft beautiful retro logos for your company.",
        "date": "2023-06-23",
        "rate": "1000",
        "tags": ["graphic designing", "ui/ux", "figma"]
    },
    {
        "username": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "position": "UI/UX Design",
        "title" : "Craft beautiful retro logos for your company.",
        "date": "2023-06-23",
        "rate": "1000",
        "tags": ["graphic designing", "ui/ux", "figma"]
    },
    {
        "username": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "position": "UI/UX Design",
        "title" : "Craft beautiful retro logos for your company.",
        "date": "2023-06-23",
        "rate": "1000",
        "tags": ["graphic designing", "ui/ux", "figma"]
    },
    {
        "username": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "position": "UI/UX Design",
        "title" : "Craft beautiful retro logos for your company.",
        "date": "2023-06-23",
        "rate": "1000",
        "tags": ["graphic designing", "ui/ux", "figma"]
    }
]

const ContentPage = () => {
    const [viewUserInfo, setViewUserInfo] = useState(false);
    const [isActivePost, setIsActivePost] = useState(false);

    const currentPost = {
        "username": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "description" : "Join our team! We're looking for a talented Graphics Designer with a passion for curating extremely good looking UIs. If that's you, let's connect.",
        "position": "UI/UX Design",
        "title" : "Craft beautiful retro logos for your company.",
        "date": "2023-06-23",
        "rate": "1000",
        "tags": ["graphic designing", "ui/ux", "figma"]
    }

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[235px_1fr]">
            <AsideNav activeIndex={3} />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <SheetNav title={"Promotional Posts Management"} description={"View, edit, approve and disapprove sponsored contents."}/>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-6">
                        <div className={`grid auto-rows-max items-start gap-4 md:gap-8 ${viewUserInfo? "lg:col-span-4" : "lg:col-span-6"}`}>
                            <Tabs defaultValue="submissions">
                                <div className="flex flex-row items-center">
                                    <TabsList>
                                        <TabsTrigger value="submissions" onClick={() => {
                                            setViewUserInfo(false);
                                            setIsActivePost(false);
                                        }}>New Submissions</TabsTrigger>
                                        <TabsTrigger value="active" onClick={() => {
                                            setViewUserInfo(false);
                                            setIsActivePost(false);
                                        }}>Currently Active</TabsTrigger>
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
                                <TabsContent value="submissions">
                                    <Card>
                                        <CardHeader className="px-7">
                                            <CardTitle>Newly Submitted Posts</CardTitle>
                                            <CardDescription>
                                                Newly submitted posts for verification.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>User</TableHead>
                                                        <TableHead className="hidden sm:table-cell">
                                                            Title
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Submission Date
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Rate
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Tags
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">Actions</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {promotionalPosts.map((post) => (
                                                        <TableRow className="" key={post.email}>
                                                            <TableCell>
                                                                <div className="font-medium">{post.username}</div>
                                                                <div
                                                                    className="hidden text-sm text-muted-foreground md:inline">
                                                                    {post.email}
                                                                </div>
                                                            </TableCell>
                                                            <TableCell className="hidden sm:table-cell">
                                                                {post.title}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {post.date}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                Rs. {post.rate}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {post.tags.map((tag) => <p>
                                                                    #{tag}</p>
                                                                )}
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
                                            <CardTitle>Currently Active Posts</CardTitle>
                                            <CardDescription>
                                                These posts are currently active on the platform.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>User</TableHead>
                                                        <TableHead className="hidden sm:table-cell">
                                                            Title
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Submission Date
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Rate
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Tags
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Views
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Clicks
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Conversions
                                                        </TableHead>
                                                        <TableHead className="hidden md:table-cell">Actions</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {promotionalPosts.map((post) => (
                                                        <TableRow className="" key={post.email}>
                                                            <TableCell>
                                                                <div className="font-medium">{post.username}</div>
                                                                <div
                                                                    className="hidden text-sm text-muted-foreground md:inline">
                                                                    {post.email}
                                                                </div>
                                                            </TableCell>
                                                            <TableCell className="hidden sm:table-cell">
                                                                {post.title}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {post.date}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                Rs. {post.rate}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {post.tags.map((tag) => <p>
                                                                    #{tag}</p>
                                                                )}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {post.rate}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {post.rate}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {post.rate}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                <Button size="sm" variant="outline"
                                                                        className="h-8 gap-1"
                                                                        onClick={() => {
                                                                            setViewUserInfo(true);
                                                                            setIsActivePost(true);
                                                                        }}>
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
                            {viewUserInfo && !isActivePost &&
                                <PendingPostInformation />
                            }
                            {viewUserInfo && isActivePost &&
                                <ActivePostInformation />
                            }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ContentPage;