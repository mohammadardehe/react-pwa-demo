import React, { useContext } from "react"
import { IoMenu } from "react-icons/io5"
import { AppContext } from "../context/AppContext"

export default function Header() {
    const { setShowSideNav } = useContext(AppContext)

    return (
        <div className="row bg-primary shadow">
            <div className="col-lg-12 mt-2 px-3 d-flex flex-row justify-content-between">
                <p onClick={() => setShowSideNav(true)}>
                    <IoMenu style={{ fontSize: 23, color: "#fff" }} />
                </p>
                <p className="fw-bold text-white">React PWA</p>
            </div>
        </div>
    )
}