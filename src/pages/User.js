import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import SideNavMenu from "../components/SideNavMenu"
import axios from "axios"

export default function User() {
    const [userList, setUserList] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [online, setOnline] = useState("online")

    useEffect(() => {
        axios({
            baseURL: "https://fakestoreapi.com",
            url: "/users",
            method: "GET"
        })
            .then((response) => {
                localStorage.setItem("users", JSON.stringify(response.data))
                setUserList(response.data)
                setLoaded(true)
            })
            .catch((err) => {
                const result = localStorage.getItem("users")
                setUserList(JSON.parse(result))
                setLoaded(true)
            })
    }, [])

    useEffect(() => {
        if (!navigator.onLine) {
            setOnline("offline")
        }
    }, [navigator.onLine])

    return (
        <div className="container-fluid">
            <Header />
            <SideNavMenu />
            <div className="row">
                <div className="col-lg-12">
                    {
                        online == "offline" ?
                            <div class="alert alert-warning mt-3" role="alert">
                                you are offline! please turn on connection
                            </div> : null
                    }
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loaded ?
                                    userList.map((item, key) => {
                                        return (
                                            <tr>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                            </tr>
                                        )
                                    }) :
                                    <div class="spinner-border text-primary mt-3" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}