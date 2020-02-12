import React from "react"
import styled, { withTheme } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.scss"
import { backgroundColor } from "../theme"

const Main = styled.div`
    background: ${backgroundColor};
    height: 100%;
    transition: all 0.5s ease-in-out;
`

const SVG_CONSTANTS = {
    MOBILE_SIZE: "600px",
    DESKTOP_SIZE: "700px",
}

const SVG = styled.svg`
    height: ${SVG_CONSTANTS.MOBILE_SIZE};
    flex: 0 0 auto;

    @media only screen and (min-width: 768px) {
        height: ${SVG_CONSTANTS.DESKTOP_SIZE};

        flex-direction: row;
        overflow: hidden;
        padding-bottom: 0;
    }
`

const ShiftUp = styled.div`
    margin-top: -${SVG_CONSTANTS.MOBILE_SIZE};

    @media only screen and (min-width: 768px) {
        margin-top: -${SVG_CONSTANTS.DESKTOP_SIZE};
    }
`

const Layout = props => {
    if (props.theme?.mode) {
        return (
            <Main>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <SVG
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 4000 600"
                    >
                        <path
                            style={{
                                fill: `${
                                    props.theme.mode === "light"
                                        ? "#c8c8c8"
                                        : "#26272d"
                                }`,
                                transition: "all .5s ease-in-out",
                            }}
                            className="curve"
                            d="M.5.5v508s364,107,996,92S2139,335,3010,297s991,54,991,54L4000.5.5Z"
                        />
                    </SVG>
                </div>

                <ShiftUp>
                    <div className={layoutStyles.container}>
                        <Header />
                        <div className={layoutStyles.content}>
                            {props.children}
                        </div>
                        <Footer />
                    </div>
                </ShiftUp>
            </Main>
        )
    } else {
        return null
    }
}

export default withTheme(Layout)
