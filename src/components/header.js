import React from "react"
import { useTheme } from "../contexts/ThemeContext"
import { withTheme } from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import { FaMoon, FaSun } from "react-icons/fa"
import { ThemeTogglerWrapper, NavItem, HeaderTitle } from "./styled"

const Header = ({ theme }) => {
    const themeToggle = useTheme()
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    site
                }
            }
        }
    `)
    return (
        <header className={headerStyles.header}>
            <h1
                style={{
                    position: "absolute",
                    top: "5px",
                    left: "15px",
                    fontSize: ".5em",
                }}
            >
                <Link to="/">
                    <HeaderTitle>{data.site.siteMetadata.site}</HeaderTitle>
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link
                            to="/"
                            activeClassName={headerStyles.activeNavItem}
                        >
                            <NavItem>home</NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects/"
                            activeClassName={headerStyles.activeNavItem}
                        >
                            <NavItem>projects</NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog/"
                            activeClassName={headerStyles.activeNavItem}
                        >
                            <NavItem>blog</NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact/"
                            activeClassName={headerStyles.activeNavItem}
                        >
                            <NavItem>contact</NavItem>
                        </Link>
                    </li>
                    <li>
                        <ThemeTogglerWrapper>
                            {theme.mode === "light" ? (
                                <FaMoon
                                    onClick={() => themeToggle.toggle()}
                                    style={{ color: "black" }}
                                />
                            ) : (
                                <FaSun onClick={() => themeToggle.toggle()} />
                            )}
                        </ThemeTogglerWrapper>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default withTheme(Header)
