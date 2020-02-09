import React from "react"
import Header from "./header"
import Footer from "./footer"
import Background from "../assets/background.svg"

import layoutStyles from "./layout.module.scss"

let svgStyles = {
    background: `url(${Background}) no-repeat`,
    backgroundSize: "cover",
    height: "100vh",
    position: "relative",
}

const Layout = props => (
    <div style={svgStyles}>
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header></Header>
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    </div>
)

export default Layout
