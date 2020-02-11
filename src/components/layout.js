import React from "react"
import Header from "./header"
import Navbar from "./header"
import Footer from "./footer"

import { withTheme } from "styled-components"

import layoutStyles from "./layout.module.scss"
import { Main } from "./styled"

const Layout = props => {
    if (!!props.theme?.mode) {
        return (
            <Main>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <svg
                        className={layoutStyles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1920 1080"
                    >
                        <path
                            style={{
                                fill: `${
                                    props.theme.mode === "dark"
                                        ? "#26272d"
                                        : "#c8c8c8"
                                }`,
                                transition: "fill .5s ease-in-out",
                            }}
                            class="curve"
                            d="M.5-.5v735s544,71,911,0,1009,7,1009,7V-.5Z"
                        />
                    </svg>

                    <div className={layoutStyles.container}>
                        <Header />
                        <div className={layoutStyles.content}>
                            {props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </Main>
        )
    } else {
        return null
    }
}

export default withTheme(Layout)
