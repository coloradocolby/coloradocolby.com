import React from "react"
import { MyThemeProvider } from "./src/contexts/ThemeContext"
import { Main } from "./src/components/styled"

import "prismjs/themes/prism-tomorrow.css" // for code highlighting
import "./src/styles/global.scss"

export const wrapRootElement = ({ element }) => (
    // put providers here
    <MyThemeProvider>
        <Main>{element}</Main>
    </MyThemeProvider>
)
