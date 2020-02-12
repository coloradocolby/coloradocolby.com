import React from "react"
import Header from "./header"
import Footer from "./footer"

import styled, { withTheme } from "styled-components"

import layoutStyles from "./layout.module.scss"
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
    if (!!props.theme?.mode) {
        return (
            <>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <SVG
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
            </>
        )
    } else {
        return null
    }
}

export default withTheme(Layout)
