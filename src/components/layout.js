import React from "react"
import Header from "./header"
import Footer from "./footer"

import layoutStyles from "./layout.module.scss"
// import "../styles/reset.scss"

const Layout = props => (
    <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
            <Header></Header>
            {props.children}
        </div>
        <Footer></Footer>
    </div>
)

export default Layout
