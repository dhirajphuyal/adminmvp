import {useState} from "react";
import {useToast} from "@/components/ui/use-toast";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Check, X} from "lucide-react";

const ActivePostInformation = () => {
    const [allowEdit, setAllowEdit] = useState(false);
    const { toast } = useToast();

    const currentPost = {
        "username": "Dhiraj Phuyal",
        "email": "phuyal.dhiraj17@gmail.com",
        "description" : "Join our team! We're looking for a talented Graphics Designer with a passion for curating extremely good looking UIs. If that's you, let's connect.",
        "position": "UI/UX Design",
        "title" : "Craft beautiful retro logos for your company.",
        "date": "2023-06-23",
        "rate": "1000",
        "expiresAt": "2023-07-23",
        "tags": ["graphic designing", "ui/ux", "figma"]
    }

    return <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center bg-muted/50">
            <div className="grid gap-2">
                <CardTitle>Active Post Information</CardTitle>
                <CardDescription>
                    This post is currently active on the platform.
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
                <Label htmlFor="name">Title:</Label>
                <Input disabled={!allowEdit} type="text" id="name" value={currentPost.title}/>
                <Label htmlFor="description">Description:</Label>
                <Input disabled={!allowEdit} type="text" id="description" className={"h-8"} value={currentPost.description}/>
                <Label htmlFor="position">Position:</Label>
                <Input disabled={!allowEdit} type="text" id="position" value={currentPost.position}/>
                <Label htmlFor="submissionDate">Submission Date:</Label>
                <Input disabled={!allowEdit} type="email" id="submissionDate" value={currentPost.date}/>
                <Label htmlFor="expiryDate">Expires at:</Label>
                <Input disabled={!allowEdit} type="text" id="expiryDate" value={currentPost.expiresAt}/>
                <Label htmlFor="tags">Tags:</Label>
                <Input disabled={!allowEdit} type="number" id="tags" value={currentPost.tags}/>
                <Label htmlFor="rate">Rate:</Label>
                <Input disabled={!allowEdit} type="text" id="rate" value={currentPost.rate}/>
            </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t bg-muted/50 px-6 py-5 gap-2">
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
        </CardFooter>
    </Card>
}

export default ActivePostInformation;