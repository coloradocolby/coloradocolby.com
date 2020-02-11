import React from "react"
import Header from "./header"
import Footer from "./footer"
import DarkBackground from "../assets/background-dark.svg"
import LightBackground from "../assets/background-light.svg"

import { withTheme } from "styled-components"

import layoutStyles from "./layout.module.scss"
import { Main } from "./styled"

const Layout = props => {
    if (!!props.theme?.mode) {
        return (
            <Main>
                <div
                    style={{
                        backgroundImage: `url(${
                            props.theme.mode === "light"
                                ? LightBackground
                                : DarkBackground
                        })`,
                        backgroundAttachment: "fixed",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        transition: "all .5s ease-in-out",
                    }}
                >
                    <div className={layoutStyles.container}>
                        <Header></Header>
                        <div className={layoutStyles.content}>
                            {props.children}
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </Main>
        )
    } else {
        return null
    }
}

export default withTheme(Layout)
