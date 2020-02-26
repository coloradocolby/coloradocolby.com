import React from "react"
import { GitHub, Instagram, Twitter, Youtube, Linkedin } from "react-feather"
import { SocialIcon } from "./styled"

const Footer = () => {
    return (
        <footer className="my-4 flex justify-center">
            <a
                className="px-5"
                href="https://www.github.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SocialIcon>
                    <GitHub />
                </SocialIcon>
            </a>
            <a
                className="px-5"
                href="https://www.instagram.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
            </a>
            <a
                className="px-5"
                href="https://www.twitter.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SocialIcon>
                    <Twitter />
                </SocialIcon>
            </a>
            <a
                className="px-5"
                href="https://www.youtube.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SocialIcon>
                    <Youtube />
                </SocialIcon>
            </a>
            <a
                className="px-5"
                href="https://www.linkedin.com/in/coloradocolby/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SocialIcon>
                    <Linkedin />
                </SocialIcon>
            </a>
        </footer>
    )
}

export default Footer
