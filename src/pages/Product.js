import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import SideNavMenu from "../components/SideNavMenu"
import axios from "axios"

export default function Product() {
    const [productList, setProductList] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [online, setOnline] = useState("online")

    useEffect(() => {
        axios({
            baseURL: "https://fakestoreapi.com",
            url: "/products",
            method: "GET"
        })
            .then((response) => {
                localStorage.setItem("products", JSON.stringify(response.data))
                setProductList(response.data)
                setLoaded(true)
            })
            .catch((err) => {
                const result = localStorage.getItem("products")
                setProductList(JSON.parse(result))
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
                    <div className="row">
                        {
                            loaded ?
                                productList.map((item, key) => {
                                    return (
                                        <div className="col-lg-4 col-6 my-3">
                                            <div className="card">
                                                <img src={item.image} className="my-2 mx-3" alt="image" width={60} height={60} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0, 100)}...</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) :
                                <div class="spinner-border text-primary mt-3" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}