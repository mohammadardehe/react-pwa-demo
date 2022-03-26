import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useHistory } from "react-router-dom"

export default function SideNavMenu() {
    const history = useHistory()
    const { showSideNav, setShowSideNav } = useContext(AppContext)

    function userNavigation() {
        history.push("/users")
        setShowSideNav(false)
    }

    function homeNavigation() {
        history.push("/")
        setShowSideNav(false)
    }

    function productNavigation() {
        history.push("/products")
        setShowSideNav(false)
    }

    return (
        <div className={showSideNav ? "sidemenu-container-show shadow" : "sidemenu-container shadow"}>
            <div>
                <button className="btn btn-danger" onClick={() => setShowSideNav(false)}>close</button>
                <ul className="ps-0">
                    <li className="my-4" onClick={() => homeNavigation()}>
                        <a className="text-secondary" style={{ textDecoration: "none" }}>Home</a>
                    </li>
                    <hr />
                    <li className="my-4" onClick={() => userNavigation()}>
                        <a className="text-secondary" style={{ textDecoration: "none" }}>Users</a>
                    </li>
                    <hr />
                    <li className="my-4" onClick={() => productNavigation()}>
                        <a className="text-secondary" style={{ textDecoration: "none" }}>Products</a>
                    </li>
                    <hr />
                    <li className="my-4">
                        <a className="text-secondary" style={{ textDecoration: "none" }}>About</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}