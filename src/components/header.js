import React from "react"
import { useTheme } from "../contexts/ThemeContext"
import { withTheme } from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import { FaMoon } from "react-icons/fa"

const Header = () => {
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
            <h1>
                <Link to="/" className={headerStyles.title}>
                    {data.site.siteMetadata.site}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <div>
                            <FaMoon onClick={() => themeToggle.toggle()} />
                        </div>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className={`animated bounce ${headerStyles.navItem}`}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects/"
                            className={`animated bounce ${headerStyles.navItem}`}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog/"
                            className={`animated bounce ${headerStyles.navItem}`}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact/"
                            className={`animated bounce ${headerStyles.navItem}`}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default withTheme(Header)
