import React, { useState } from "react"

export const AppContext = React.createContext()

export default function AppContextProvider(props) {
    const [showSideNav, setShowSideNav] = useState(false)

    return (
        <AppContext.Provider
            value={{ showSideNav, setShowSideNav }}
        >
            {props.children}
        </AppContext.Provider>
    )
}