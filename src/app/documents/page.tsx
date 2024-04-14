"use client"
import {
    Check,
    Eye, Search, X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import {useEffect, useState} from "react";
import * as PDFObject from 'pdfobject';
import AsideNav from "@/components/common/AsideNav";
import SheetNav from "@/components/common/SheetNav";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {useToast} from "@/components/ui/use-toast";


const customerInfo = [
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23"
    }
]


const Dashboard = () => {
    const [viewUserInfo, setViewUserInfo] = useState(false);
    const { toast } = useToast();

    const currentUser = {
        "userId": "12212",
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "phoneNumber": "9841234567",
        "address": "Kathmandu, Nepal",
        "documentNumber": "123456789",
        "document": "/documents/Document.pdf",
        "documentUploadData": "November 23, 2023"
    }

    useEffect(() => {
        const loadPdf = document.createElement('script');
        loadPdf.src = "https://unpkg.com/pdfobject";
        loadPdf.async = true;
        document.body.appendChild(loadPdf);

        PDFObject.embed(`${currentUser.document}`, "#pdfRenderer");
        return () => {
            document.body.removeChild(loadPdf);
        };
    }, [viewUserInfo]);

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[235px_1fr]">
            <AsideNav activeIndex={1} />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <SheetNav title={"Document Verification"} description={"Verify and manage the user documents."}/>
                <main
                    className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-8 xl:grid-cols-12">
                    <div className={`auto-rows-max items-start gap-4 md:gap-8 ${viewUserInfo? "lg:col-span-5" : "lg:col-span-12"} `}>
                        <Tabs defaultValue="pending">
                            <div className="flex items-center">
                                <TabsList>
                                    <TabsTrigger value="pending">Pending</TabsTrigger>
                                    <TabsTrigger value="verified">Verified</TabsTrigger>
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
                            <TabsContent value="pending">
                                <Card>
                                    <CardHeader className="px-7">
                                        <CardTitle>Pending Verifications</CardTitle>
                                        <CardDescription>
                                            Recently filled out documents awaiting verification.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                    <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Customer</TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Type
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Date
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">Action</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {customerInfo.map((customer) => (
                                                    <TableRow className="" key={customer.email}>
                                                        <TableCell>
                                                            <div className="font-medium">{customer.name}</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                {customer.email}
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            {customer.type}
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            {customer.date}
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            <Button size="sm" variant="outline" className="h-8 gap-1" onClick={() => setViewUserInfo(true)}>
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
                            <TabsContent value={"verified"}>
                                <Card>
                                    <CardHeader className="px-7">
                                        <CardTitle>Pending Verifications</CardTitle>
                                        <CardDescription>
                                            Verified Users.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Customer</TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Type
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Date
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">Action</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {customerInfo.map((customer) => (

                                                    <TableRow className="" key={customer.email}>
                                                        <TableCell>
                                                            <div className="font-medium">{customer.name}</div>
                                                            <div
                                                                className="hidden text-sm text-muted-foreground md:inline">
                                                                {customer.email}
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            {customer.type}
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            {customer.date}
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            <Button size="sm" variant="outline" className="h-8 gap-1" onClick={() => setViewUserInfo(true)}>
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
                    {viewUserInfo &&
                    <div className={"lg:col-span-3"}>
                        <Card className="overflow-hidden">
                            <CardHeader className="flex flex-row items-center bg-muted/50">
                                <div className="grid gap-2">
                                    <CardTitle>User Information</CardTitle>
                                    <CardDescription>
                                        Information filled out by the user.
                                    </CardDescription>
                                </div>
                                <Button asChild size="sm" className="ml-auto gap-1 bg-black hover:bg-gray-600">
                                    <Link href="#">
                                        Edit User
                                    </Link>
                                </Button>
                            </CardHeader>
                            <CardContent className="p-6 text-sm h-auto">
                                <div className={"flex flex-col gap-4"}>
                                    <Label htmlFor="name">Full Name:</Label>
                                    <Input disabled type="text" id="name" value={currentUser.name}/>
                                    <Label htmlFor="email">Email:</Label>
                                    <Input disabled type="email" id="email" value={currentUser.email}/>
                                    <Label htmlFor="number">Phone Number:</Label>
                                    <Input disabled type="number" id="number" value={currentUser.phoneNumber}/>
                                    <Label htmlFor="address">Address:</Label>
                                    <Input disabled type="text" id="address" value={currentUser.address}/>
                                    <Label htmlFor="documentNumber">Document Number:</Label>
                                    <Input disabled type="text" id="documentNumber" value={currentUser.documentNumber}/>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start border-t bg-muted/50 px-6 py-5 gap-2">
                                    <Label htmlFor="comment">Comment:</Label>
                                    <Input type="text" id="comment" placeholder="" className={"h-28"}/>
                                    <div className={"flex flex-row gap-2"}>
                                        <Button size="sm" variant="default" className="h-8 gap-1" onClick={
                                            () => {
                                                toast({
                                                    title: "User Verified!",
                                                    description: "The specified user has been verified.",
                                                    variant: "default",
                                                });
                                                setViewUserInfo(false);
                                            }
                                        }>
                                            Verify
                                            <Check className={"h-4 w-4"}/>
                                        </Button>
                                        <Button size="sm" variant="destructive" className="h-8 gap-1" onClick={
                                            () => {
                                                toast({
                                                    title: "User Rejected!",
                                                    description: "The specified user has been rejected.",
                                                    variant: "destructive",
                                                });
                                                setViewUserInfo(false);
                                            }
                                        }>
                                            Reject
                                            <X className={"h-4 w-4"}/>
                                        </Button>
                                    </div>
                            </CardFooter>
                        </Card>
                        </div>}
                    {viewUserInfo &&
                    <div className={"lg:col-span-4"}>
                            <Card className="overflow-hidden">
                                <CardHeader className="flex flex-row items-start bg-muted/50">
                                    <div className="grid gap-0.5">
                                        <CardTitle className="group flex items-center gap-2 text-lg">
                                            Uploaded Document
                                        </CardTitle>
                                        <CardDescription>Official identification document uploaded by the user.</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className={cn("p-6 text-sm h-[75vh]")} id={"pdfRenderer"}></CardContent>
                            </Card>
                    </div>
                    }
                </main>
            </div>
        </div>
    )
}

export default Dashboard;