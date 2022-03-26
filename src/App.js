import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AppContextProvider from "./context/AppContext"
import Home from "./pages/Home"
import User from "./pages/User"
import Product from "./pages/Product"

export default function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/users"} component={User} />
            <Route exact path={"/products"} component={Product} />
          </Switch>
        </BrowserRouter>
      </AppContextProvider>
    </>
  )
}