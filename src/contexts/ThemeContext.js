import React, { createContext, useState, useContext } from "react"
import styled, { ThemeProvider } from "styled-components"
import { backgroundColor, textColor } from "../theme"

// define our toggle context, with a default empty toggle function
const ThemeToggleContext = createContext({
    toggle: () => {},
})

// define exportable useContext hook object
export const useTheme = () => useContext(ThemeToggleContext)

// define
export const MyThemeProvider = ({ children }) => {
    //default mode is set to 'light'
    const [themeState, setThemeState] = useState({
        mode: "light",
    })
    // define toggle function
    const toggle = () => {
        console.log("in toggle")
        const mode = themeState.mode === "light" ? "dark" : "light"

        setThemeState({ mode: mode })
    }

    // render both contexts, then Wrapper, then children
    return (
        <ThemeToggleContext.Provider value={{ toggle: toggle }}>
            <ThemeProvider
                theme={{
                    mode: themeState.mode,
                }}
            >
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    )
}

export default ThemeProvider
