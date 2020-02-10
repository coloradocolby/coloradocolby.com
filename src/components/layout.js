import React from "react"
import Header from "./header"
import Footer from "./footer"
import Background from "../assets/background.svg"
import styled, { withTheme } from "styled-components"

import layoutStyles from "./layout.module.scss"
import { backgroundColor } from "../theme"
import { Main } from "./styled"

let svgStyles = {
    background: `url(${Background}) no-repeat`,
    backgroundSize: "cover",
    height: "100vh",
    position: "relative",
}

const Layout = props => {
    console.log(props.theme)
    return (
        <Main>
            <div style={svgStyles}>
                <div className={layoutStyles.container}>
                    <div className={layoutStyles.content}>
                        <Header></Header>
                        {props.children}
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </Main>
    )
}

export default withTheme(Layout)
