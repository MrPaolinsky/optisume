import { AppBar } from "@skeletonlabs/skeleton-react"
import { CircleUser } from 'lucide-react'
import { NavLink } from "react-router"

export default function AppTopBar() {

    return <AppBar>
        <AppBar.Toolbar>
            <AppBar.ToolbarLead>
            </AppBar.ToolbarLead>
            <AppBar.ToolbarCenter classes="hidden sm:block">
            </AppBar.ToolbarCenter>
            <AppBar.ToolbarTrail>
                <div className="hidden space-x-4 sm:flex ">
                    <NavLink to="/profile">
                        <CircleUser size={20} />
                    </NavLink>
                </div>
            </AppBar.ToolbarTrail>
        </AppBar.Toolbar>
    </AppBar>
}
