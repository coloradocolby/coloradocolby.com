import React from "react"
import Header from "./header"
import Footer from "./footer"
import DarkBackground from "../assets/background-dark.svg"
import LightBackground from "../assets/background-light.svg"

import styled, { withTheme } from "styled-components"

import layoutStyles from "./layout.module.scss"
import { backgroundColor } from "../theme"
import { Main } from "./styled"

const Layout = props => {
    let svgStyles = {
        backgroundImage: `url(${
            props.theme.mode === "light" ? LightBackground : DarkBackground
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "all .5s ease-in-out",
    }

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
