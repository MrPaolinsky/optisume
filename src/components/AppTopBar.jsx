import { AppBar } from "@skeletonlabs/skeleton-react"
import { Paperclip, Calendar, CircleUser, Menu } from 'lucide-react'

export default function AppTopBar() {
    return <AppBar>
        <AppBar.Toolbar>
            <AppBar.ToolbarLead>
                Optisume
            </AppBar.ToolbarLead>
            <AppBar.ToolbarCenter classes="hidden sm:block">
                <span>Title</span>
            </AppBar.ToolbarCenter>
            <AppBar.ToolbarTrail>
                <div className="hidden space-x-4 sm:flex">
                    <Paperclip size={20} />
                    <Calendar size={20} />
                    <CircleUser size={20} />
                </div>
                <div className="block sm:hidden">
                    <Menu size={20} />
                </div>
            </AppBar.ToolbarTrail>
        </AppBar.Toolbar>
    </AppBar>
}
