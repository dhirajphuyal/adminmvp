"use client"

import AsideNav from "@/components/common/AsideNav";
import SheetNav from "@/components/common/SheetNav";

const Dashboard = () => {

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <AsideNav activeIndex={0} />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <SheetNav title={"Dashboard"} description={""}/>
                <main
                    className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-4 xl:grid-cols-12">
                    <div className={"col-span-12 flex flex-col items-center justify-center h-dvh"}>
                        <p>Content to be added.</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard;