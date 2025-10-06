import * as React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import ZustandIndex from "@/components/page/zustand/index"
export default function Zustand() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <main style={{ padding: '32px', width: '100%', backgroundColor: '#f0f0f0' }}>
                <ZustandIndex/>
            </main>
        </SidebarProvider>
    );
}
