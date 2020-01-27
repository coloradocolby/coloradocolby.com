import React from "react"
import footerStyles from "./footer.module.scss"

import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa"
const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <a
                href="https://www.github.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub />
            </a>

            <a
                href="https://www.instagram.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram />
            </a>
            <a
                href="https://www.twitter.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaTwitter />
            </a>
            <a
                href="https://www.youtube.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaYoutube />
            </a>
            <a
                href="https://www.linkedin.com/in/coloradocolby/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin />
            </a>
        </footer>
    )
}

export default Footer
