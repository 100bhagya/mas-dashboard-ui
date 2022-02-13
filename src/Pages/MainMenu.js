import React, { useState } from 'react'
import Content from '../Components/Content.js'
import LeaderBoard from '../Components/LeaderBoard.js'
import Sidebar from '../Components/Sidebar.js';




const MainMenu = () => {
    const [sidebarOpen, setSidebarOpen]  = useState(true)
    const [lederboardOpen, setLederboardOpen]  = useState(true)
    const activateLeaderboard = ()=>{
        if(!sidebarOpen)
        setSidebarOpen(true);

        setLederboardOpen(!lederboardOpen);
    }
    const activateSidebar = ()=>{
        if(!lederboardOpen)
        setLederboardOpen(true);

        setSidebarOpen(!sidebarOpen);
    }
    return (
        <div>
            <div className="md:flex absolute inset-0">
                <nav className = "bg-slate-600 md:hidden flex justify-between p-2">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick = {activateSidebar}>
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"  onClick = {activateLeaderboard}>
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </nav>
                <Sidebar sidebarOpen = {sidebarOpen}/>
                <Content/>
                <LeaderBoard  lederboardOpen = {lederboardOpen}/>
            </div>

        </div>
    )
}

export default MainMenu
