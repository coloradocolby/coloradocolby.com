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
            <>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <svg
                        className={layoutStyles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 4001 595.68"
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
                            d="M.5.5v512s499,124,857,40,827-122,1091-40,545,8,816-21,787,154,984,90,252-69,252-69V.5Z"
                        />
                    </svg>
                </div>

                <div className={layoutStyles.container}>
                    <Header />
                    <div className={layoutStyles.content}>{props.children}</div>
                    <Footer />
                </div>
            </>
        )
    } else {
        return null
    }
}

export default withTheme(Layout)
