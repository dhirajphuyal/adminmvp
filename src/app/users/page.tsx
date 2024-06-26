"use client"
import AsideNav from "@/components/common/AsideNav";
import SheetNav from "@/components/common/SheetNav";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Ban, Check, Delete, Eye, EyeOff, Search, Trash2, Users, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {useState} from "react";
import {useToast} from "@/components/ui/use-toast";

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


const customerInfo = [
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    },
    {
        "name": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    }
]

const UsersPage = () => {
    const [allowEdit, setAllowEdit] = useState(false);
    const [viewUserInfo, setViewUserInfo] = useState(false);
    const [viewDocument, setViewDocument] = useState(false);
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

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[235px_1fr]">
            <AsideNav activeIndex={2} />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <SheetNav title={"User Management"} description={"View, edit, suspend and ban users."}/>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-5">
                        <div className={`grid auto-rows-max items-start gap-4 md:gap-8 ${viewUserInfo? "lg:col-span-3" : "lg:col-span-4"}`}>
                            <Tabs defaultValue="buyers">
                                <div className="flex flex-row items-center">
                                    <TabsList>
                                        <TabsTrigger value="buyers">Buyers</TabsTrigger>
                                        <TabsTrigger value="sellers">Sellers</TabsTrigger>
                                        <TabsTrigger value="suspended">Suspended</TabsTrigger>
                                        <TabsTrigger value="banned">Banned</TabsTrigger>
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
                                <TabsContent value="buyers">
                                    <Card>
                                        <CardHeader className="px-7">
                                            <CardTitle>Buyers</CardTitle>
                                            <CardDescription>
                                                Information about all the buyers.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Customer</TableHead>
                                                        <TableHead className="hidden sm:table-cell">
                                                            Total Transactions
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
                                                                Rs. {customer.totalAmount}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {customer.date}
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
                                <TabsContent value={"sellers"}>
                                    <Card>
                                        <CardHeader className="px-7">
                                            <CardTitle>Sellers</CardTitle>
                                            <CardDescription>
                                                Information about all the sellers.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Customer</TableHead>
                                                        <TableHead className="hidden sm:table-cell">
                                                            Total Transactions
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
                                                                Rs. {customer.totalAmount}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {customer.date}
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
                                <TabsContent value={"suspended"}>
                                    <Card>
                                        <CardHeader className="px-7">
                                            <CardTitle>Suspended</CardTitle>
                                            <CardDescription>
                                                Suspended Users
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Customer</TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Suspended Date
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
                                                            <TableCell className="hidden md:table-cell">
                                                                {customer.date}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                <AlertDialog>
                                                                    <AlertDialogTrigger>
                                                                        <Button size="sm" variant="outline"
                                                                                className="h-8 gap-1 mr-2"
                                                                                onClick={() => setViewUserInfo(true)}>
                                                                            <Trash2 className="h-3.5 w-3.5"/>
                                                                            <span
                                                                                className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                                              Remove
                                                            </span>
                                                                        </Button></AlertDialogTrigger>
                                                                    <AlertDialogContent>
                                                                        <AlertDialogHeader>
                                                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                            <AlertDialogDescription>
                                                                                This action will remove user from the suspended list. They will be active on the platform afterwards.
                                                                            </AlertDialogDescription>
                                                                        </AlertDialogHeader>
                                                                        <AlertDialogFooter>
                                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                            <AlertDialogAction className={"bg-red-600 hover:bg-red-500"}>Continue</AlertDialogAction>
                                                                        </AlertDialogFooter>
                                                                    </AlertDialogContent>
                                                                </AlertDialog>
                                                                <AlertDialog>
                                                                    <AlertDialogTrigger>
                                                                        <Button size="sm" variant="destructive"
                                                                         className="h-8 gap-1 mr-2"
                                                                         onClick={() => setViewUserInfo(true)}>
                                                                        <Ban className="h-3.5 w-3.5"/>
                                                                        <span
                                                                            className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                                              Ban Permanently
                                                            </span>
                                                                    </Button></AlertDialogTrigger>
                                                                    <AlertDialogContent>
                                                                        <AlertDialogHeader>
                                                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                            <AlertDialogDescription>
                                                                                This action cannot be undone. This will permanently ban the user from the platform.
                                                                            </AlertDialogDescription>
                                                                        </AlertDialogHeader>
                                                                        <AlertDialogFooter>
                                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                            <AlertDialogAction className={"bg-red-600 hover:bg-red-500"}>Continue</AlertDialogAction>
                                                                        </AlertDialogFooter>
                                                                    </AlertDialogContent>
                                                                </AlertDialog>

                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value={"banned"}>
                                    <Card>
                                        <CardHeader className="px-7">
                                            <CardTitle>Banned</CardTitle>
                                            <CardDescription>
                                                Banned Users
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Customer</TableHead>
                                                        <TableHead className="hidden md:table-cell">
                                                            Banned Date
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
                                                            <TableCell className="hidden md:table-cell">
                                                                {customer.date}
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
                        <div className={`grid auto-rows-max items-start gap-4 md:gap-8 ${viewUserInfo? "lg:col-span-2" : "lg:col-span-0"}`}>
                            {viewUserInfo &&
                                <Card className="overflow-hidden">
                                    <CardHeader className="flex flex-row items-center justify-between bg-muted/50">
                                        <div className="grid gap-2">
                                            <CardTitle>User Information</CardTitle>
                                            <CardDescription>
                                                Information filled out by the user.
                                            </CardDescription>
                                        </div>
                                        <div className={"flex flex-row gap-2"}>
                                            <AlertDialog>
                                                <AlertDialogTrigger>
                                                    <Button size="sm" variant="destructive"
                                                            className="h-9 gap-1 mr-2"
                                                            onClick={() => setViewUserInfo(true)}>
                                                        <span
                                                            className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                                              Suspend User
                                                            </span>
                                                    </Button></AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Are you sure you want to suspend the user?
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction className={"bg-red-600 hover:bg-red-500"} onClick={() => {
                                                            toast({
                                                                title: "User Suspended",
                                                                description: "The specified user has been suspended from the platform.",
                                                                variant: "default",
                                                            });
                                                        }}>Continue</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                            <Button asChild size="sm" className="ml-auto gap-1 bg-black hover:bg-gray-600" onClick={() => setAllowEdit(true)}>
                                                <Link href="#">
                                                    Edit User
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6 text-sm h-auto">
                                        <div className={"flex flex-col gap-4"}>
                                            <Label htmlFor="name">Full Name:</Label>
                                            <Input disabled={!allowEdit} type="text" id="name" value={currentUser.name}/>
                                            <Label htmlFor="email">Email:</Label>
                                            <Input disabled={!allowEdit} type="email" id="email" value={currentUser.email}/>
                                            <Label htmlFor="number">Phone Number:</Label>
                                            <Input disabled={!allowEdit} type="number" id="number" value={currentUser.phoneNumber}/>
                                            <Label htmlFor="address">Address:</Label>
                                            <Input disabled={!allowEdit} type="text" id="address" value={currentUser.address}/>
                                            <Label htmlFor="documentNumber">Document Number:</Label>
                                            <div className={"grid grid-cols-5 gap-2"}>
                                                <Input disabled={!allowEdit} type="text" id="documentNumber"
                                                       value={currentUser.documentNumber} className={"col-span-4"}/>
                                                <Button size="sm" variant="outline"
                                                        className="h-10 gap-1 col-span-1"
                                                        onClick={() => setViewDocument(true)}>
                                                    <Eye className="h-3.5 w-3.5"/>
                                                    <span
                                                        className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                                              View
                                                            </span>
                                                </Button>
                                            </div>
                                            {viewDocument &&
                                                <div className={"gap-2"}>
                                                    <Label htmlFor="document">Document:</Label>
                                                    <div className={"h-32 border-2 rounded-3xl mt-2"}>

                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </CardContent>
                                        <CardFooter className={"flex flex-row-reverse"}>
                                            {!allowEdit &&
                                                <Button size="sm" variant="outline"
                                                        className="h-8 gap-1"
                                                        onClick={() => setViewUserInfo(false)}>
                                                    <EyeOff className="h-3.5 w-3.5"/>
                                                    <span
                                                        className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                                              Hide
                                                            </span>
                                                </Button>
                                            }
                                            {allowEdit &&
                                                <Button size="sm" variant="default"
                                                        className="h-8 gap-1 mr-2"
                                                        onClick={() => {
                                                            toast({
                                                                title: "Saved!",
                                                                description: "The user information has been saved successfully.",
                                                                variant: "default",
                                                            });
                                                            setAllowEdit(false);
                                                        }}>
                                                        <span
                                                            className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                                              Save
                                                            </span>
                                                </Button>
                                            }
                                        </CardFooter>
                                </Card>}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

const ViewUserInfo = () => {

}

export default UsersPage;