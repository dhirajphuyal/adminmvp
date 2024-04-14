import {useState} from "react";
import {useToast} from "@/components/ui/use-toast";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Check, X} from "lucide-react";

const PostInformation = () => {
    const [allowEdit, setAllowEdit] = useState(false);
    const { toast } = useToast();

    const currentPost = {
        "title": "Craft beautiful retro logos for your company.",
        "description": "Craft beautiful retro logos for your company.",
        "type": "Seller",
        "date": "2023-06-23",
        "totalAmount": "1000"
    }

    return <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center bg-muted/50">
            <div className="grid gap-2">
                <CardTitle>Post Information</CardTitle>
                <CardDescription>
                    Information filled out by the user.
                </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1 bg-black hover:bg-gray-600" onClick={() => setAllowEdit(true)}>
                <Link href="#">
                    Edit Post
                </Link>
            </Button>
        </CardHeader>
        <CardContent className="p-6 text-sm h-auto">
            <div className={"flex flex-col gap-4"}>
                <Label htmlFor="title">Title:</Label>
                <Input disabled={!allowEdit} type="text" id="title" value={currentPost.title}/>
                <Label htmlFor="name">Description:</Label>
                <Input disabled={!allowEdit} type="text" id="description" className={"h-8"} value={currentPost.description}/>
                <Label htmlFor="type">Type:</Label>
                <Input disabled={!allowEdit} type="text" id="type" value={currentPost.type}/>
                <Label htmlFor="email">Submission Date:</Label>
                <Input disabled={!allowEdit} type="email" id="email" value={currentPost.date}/>
                <Label htmlFor="amound">Total Amount:</Label>
                <Input disabled={!allowEdit} type="number" id="amount" value={currentPost.totalAmount}/>
            </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t bg-muted/50 px-6 py-5 gap-2">
            {!allowEdit &&
                <>
                    <Label htmlFor="comment">Comment:</Label>
                    <Input type="text" id="comment" placeholder="" className={"h-28"}/>
                    <div className={"flex flex-row gap-2"}>
                        <Button size="sm" variant="default" className="h-8 gap-1" onClick={
                            () => {
                                toast({
                                    title: "Post Verified!",
                                    description: "The post has been verified. It will be active on the platform shortly.",
                                    variant: "default",
                                });
                            }
                        }>
                            Publish
                            <Check className={"h-4 w-4"}/>
                        </Button>
                        <Button size="sm" variant="destructive" className="h-8 gap-1" onClick={
                            () => {
                                toast({
                                    title: "Post Rejected!",
                                    description: "The post has been rejected.",
                                    variant: "default",
                                });
                            }
                        }>
                            Reject
                            <X className={"h-4 w-4"}/>
                        </Button>
                    </div>
                </>
            }
            {allowEdit &&
                <div className={"flex flex-row-reverse"}>
                    <div className={"col-span-1"}>
                        <Button size="sm" variant="outline" className="h-8 gap-1" onClick={
                            () => {
                                toast({
                                    title: "Saved!",
                                    description: "The post has been saved.",
                                    variant: "default",
                                });
                                setAllowEdit(false);
                            }
                        }>
                            Save
                            <Check className={"h-4 w-4"}/>
                        </Button>
                    </div>
                </div>
            }
        </CardFooter>
    </Card>
}

export default PostInformation;