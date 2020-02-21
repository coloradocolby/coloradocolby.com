import React from "react"
import { MyThemeProvider } from "./src/contexts/ThemeContext"

import "prismjs/themes/prism-tomorrow.css" // for code highlighting
import "./src/styles/main.css"

export const wrapRootElement = ({ element }) => (
    // put providers here
    <MyThemeProvider>{element}</MyThemeProvider>
)
