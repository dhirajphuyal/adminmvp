"use client"
import Link from "next/link"
import {
    Ban,
    Bell, Building2, CircleFadingPlus,
    CircleUser, Eye,
    Home,
    LineChart, ListFilter,
    Menu, NotebookText,
    Package,
    Package2,
    Search, Settings,
    ShoppingCart, StickyNote, Trash2,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Label} from "@/components/ui/label";
import {useState} from "react";
import AsideNav from "@/components/common/AsideNav";

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

export function Dashboard() {
    const [allowEdit, setAllowEdit] = useState(false);
    const [viewUserInfo, setViewUserInfo] = useState(false);

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
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <AsideNav activeIndex={0} />
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <div className="w-full flex-1">
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5"/>
                                <span className="sr-only">Toggle user menu</span>
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
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-6">
                        <div className={`grid auto-rows-max items-start gap-4 md:gap-8 ${viewUserInfo? "lg:col-span-4" : "lg:col-span-6"}`}>
                            <Tabs defaultValue="buyers">
                                <div className="flex flex-row items-center">
                                    <TabsList>
                                        <TabsTrigger value="buyers">Buyers</TabsTrigger>
                                        <TabsTrigger value="sellers">Sellers</TabsTrigger>
                                        <TabsTrigger value="suspended">Suspended</TabsTrigger>
                                        <TabsTrigger value="banned">Banned</TabsTrigger>
                                    </TabsList>
                                    <div className="relative ml-auto flex items-center gap-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="h-9 gap-1 text-sm"
                                                >
                                                    <ListFilter className="h-4 w-4" />
                                                    <span className="sr-only sm:not-sr-only">Filter</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuCheckboxItem checked>
                                                    Active
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem>
                                                    Suspended
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem>
                                                    Banned
                                                </DropdownMenuCheckboxItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <Search className="absolute inset-x-24 h-4 w-4 text-muted-foreground"/>
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
                                                                {customer.totalAmount}
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
                                                                            <AlertDialogTitle>Are
                                                                                you </AlertDialogTitle>
                                                                            <AlertDialogDescription>
                                                                                This action cannot be undone. This will
                                                                                permanently ban the user from the
                                                                                platform.
                                                                            </AlertDialogDescription>
                                                                        </AlertDialogHeader>
                                                                        <AlertDialogFooter>
                                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                            <AlertDialogAction
                                                                                className={"bg-red-600 hover:bg-red-500"}>Continue</AlertDialogAction>
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
                                                                            <AlertDialogTitle>Are you
                                                                                sure?</AlertDialogTitle>
                                                                            <AlertDialogDescription>
                                                                                This action cannot be undone. This will
                                                                                permanently ban the user from the
                                                                                platform.
                                                                            </AlertDialogDescription>
                                                                        </AlertDialogHeader>
                                                                        <AlertDialogFooter>
                                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                            <AlertDialogAction
                                                                                className={"bg-red-600 hover:bg-red-500"}>Continue</AlertDialogAction>
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
                        <div className={`grid auto-rows-max items-start gap-4 md:gap-8 ${viewUserInfo? "lg:col-span-2": "hidden"} `}>
                            {viewUserInfo ? (
                                <Card className="overflow-hidden">
                                    <CardHeader className="flex flex-row items-center justify-between bg-muted/50">
                                        <div className="grid gap-2">
                                            <CardTitle>User Information</CardTitle>
                                            <CardDescription>
                                                Information filled out by the user.
                                            </CardDescription>
                                        </div>
                                        <div className={"flex flex-row gap-4"}>
                                            <AlertDialog>
                                                <AlertDialogTrigger>
                                                    <Button size="sm" variant="destructive"
                                                            className="h-8 gap-1 mr-2"
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
                                                        <AlertDialogAction
                                                            className={"bg-red-600 hover:bg-red-500"}>Continue</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                            <Button asChild size="sm"
                                                    className="ml-auto gap-1 bg-black hover:bg-gray-600"
                                                    onClick={() => setAllowEdit(true)}>
                                                <Link href="#">
                                                    Edit User
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6 text-sm h-auto">
                                        <div className={"flex flex-col gap-4"}>
                                            <Label htmlFor="name">Full Name:</Label>
                                            <Input disabled={!allowEdit} type="text" id="name"
                                                   value={currentUser.name}/>
                                            <Label htmlFor="email">Email:</Label>
                                            <Input disabled={!allowEdit} type="email" id="email"
                                                   value={currentUser.email}/>
                                            <Label htmlFor="number">Phone Number:</Label>
                                            <Input disabled={!allowEdit} type="number" id="number"
                                                   value={currentUser.phoneNumber}/>
                                            <Label htmlFor="address">Address:</Label>
                                            <Input disabled={!allowEdit} type="text" id="address"
                                                   value={currentUser.address}/>
                                            <Label htmlFor="documentNumber">Document Number:</Label>
                                            <Input disabled={!allowEdit} type="text" id="documentNumber"
                                                   value={currentUser.documentNumber}/>
                                        </div>
                                    </CardContent>
                                    {allowEdit && (
                                        <CardFooter className={"flex flex-row-reverse"}>
                                            <Button asChild size="sm"
                                                    className="ml-auto gap-1 bg-black hover:bg-gray-600"
                                                    onClick={() => setAllowEdit(false)}>
                                                <Link href="#">
                                                    Save
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    )}
                                </Card>
                            ) : (
                                <Card className={"overflow-hidden"}>
                                    <CardHeader className="flex flex-row items-start bg-muted/50">
                                        <div className="grid gap-0.5">
                                            <CardTitle className="group flex items-center gap-2 text-lg">
                                                User Information
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className={"p-6 text-sm"}>
                                        <p>Select user to view their information.</p>
                                    </CardContent>
                                </Card>
                            )}</div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard
