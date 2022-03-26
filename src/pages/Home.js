import React from "react"
import Header from "../components/Header"
import SideNavMenu from "../components/SideNavMenu"

export default function Home() {
    return (
        <div className="container-fluid">
            <Header />
            <SideNavMenu />
            <h5 className="mt-3">React PWA</h5>
            <p>develop by: Mohammad Ardehe</p>
        </div>
    )
}