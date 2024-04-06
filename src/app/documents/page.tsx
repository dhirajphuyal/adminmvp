"use client"

import {
    ChevronLeft,
    ChevronRight,
    Eye,
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
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"

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

import {useEffect} from "react";
import * as PDFObject from 'pdfobject';
import AsideNav from "@/components/common/AsideNav";
import SheetNav from "@/components/common/SheetNav";


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
    let currentUser = {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
    }

    useEffect(() => {
        const loadPdf = document.createElement('script');
        loadPdf.src = "https://unpkg.com/pdfobject";
        loadPdf.async = true;
        document.body.appendChild(loadPdf);

        PDFObject.embed("/documents/Document.pdf", "#pdfRenderer");
        return () => {
            document.body.removeChild(loadPdf);
        };
    }, []);

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <AsideNav activeIndex={1} />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <SheetNav />
                <main
                    className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-4 xl:grid-cols-12">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-4">
                        <Tabs defaultValue="pending">
                            <div className="flex items-center">
                                <TabsList>
                                    <TabsTrigger value="pending">Pending</TabsTrigger>
                                    <TabsTrigger value="verified">Verified</TabsTrigger>
                                </TabsList>
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
                                                            <Button size="sm" variant="outline" className="h-8 gap-1">
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
                    <div className={"lg:col-span-3"}>
                        <Card className="overflow-hidden">
                            <CardHeader className="flex flex-row items-start bg-muted/50">
                                <div className="grid gap-0.5">
                                    <CardTitle className="group flex items-center gap-2 text-lg">
                                        {currentUser.name}
                                    </CardTitle>
                                    <CardDescription>{currentUser.email}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm h-dvh"></CardContent>
                            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                                <div className="text-xs text-muted-foreground">
                                    Updated <time dateTime="2023-11-23">November 23, 2023</time>
                                </div>
                                <Pagination className="ml-auto mr-0 w-amuto">
                                    <PaginationContent>
                                        <PaginationItem>
                                            <Button size="icon" variant="outline" className="h-6 w-6">
                                                <ChevronLeft className="h-3.5 w-3.5"/>
                                                <span className="sr-only">Previous Order</span>
                                            </Button>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <Button size="icon" variant="outline" className="h-6 w-6">
                                                <ChevronRight className="h-3.5 w-3.5"/>
                                                <span className="sr-only">Next Order</span>
                                            </Button>
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className={"lg:col-span-5"}>
                        <Card className="overflow-hidden">
                            <CardHeader className="flex flex-row items-start bg-muted/50">
                                <div className="grid gap-0.5">
                                    <CardTitle className="group flex items-center gap-2 text-lg">
                                        {currentUser.name}
                                    </CardTitle>
                                    <CardDescription>{currentUser.email}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm h-dvh" id={"pdfRenderer"}></CardContent>
                            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                                <div className="text-xs text-muted-foreground">
                                    Updated <time dateTime="2023-11-23">November 23, 2023</time>
                                </div>
                                <Pagination className="ml-auto mr-0 w-amuto">
                                    <PaginationContent>
                                        <PaginationItem>
                                            <Button size="icon" variant="outline" className="h-6 w-6">
                                                <ChevronLeft className="h-3.5 w-3.5"/>
                                                <span className="sr-only">Previous Order</span>
                                            </Button>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <Button size="icon" variant="outline" className="h-6 w-6">
                                                <ChevronRight className="h-3.5 w-3.5"/>
                                                <span className="sr-only">Next Order</span>
                                            </Button>
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </CardFooter>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard;