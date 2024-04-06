import AsideNav from "@/components/common/AsideNav";
import SheetNav from "@/components/common/SheetNav";

const SettingsPage = () => {

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <AsideNav activeIndex={5} />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <SheetNav />
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

export default SettingsPage;