import React from "react"
import styled, { withTheme } from "styled-components"

import Header from "./header"
import Footer from "./footer"
// import layoutStyles from "./layout.module.scss"
import { backgroundColor } from "../theme"

const Main = styled.div`
    background: ${backgroundColor};
    height: 100%;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
`

const SVG_SIZE = "700px"

const SVG = styled.svg`
    height: ${SVG_SIZE};
    flex: 0 0 auto;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        overflow: hidden;
        padding-bottom: 0;
    }
`

const ShiftUp = styled.div`
    margin-top: -${SVG_SIZE};
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
                    <div className="min-h-screen flex flex-col px-10 overflow-hidden max-w-screen-md my-0 mx-auto">
                        <Header />
                        <div className="flex-grow">{props.children}</div>
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
