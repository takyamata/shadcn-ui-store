import * as React from "react"
import HomeIndex from "@/components/page/home/index"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
export default function Home() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main style={{ padding: '32px', width: '100%', backgroundColor: '#f0f0f0' }}>
                <HomeIndex/>
            </main>
        </SidebarProvider>
    );
}
