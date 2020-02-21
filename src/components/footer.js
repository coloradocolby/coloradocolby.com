import React from "react"
// import footerStyles from "./footer.module.scss"

import { GitHub, Instagram, Twitter, Youtube, Linkedin } from "react-feather"
import { SocialIcon } from "./styled"
import styled, { withTheme } from "styled-components"

// const Footerr = styled.div`
//     margin-top: 3rem;
//     font-size: 2rem;
//     display: flex;
//     justify-content: center;

//     a {
//         color: #999999;
//         padding: 0 1rem;
//         transition: color 0.5s ease-in-out;
//         transition: transform 0.2s ease-in-out;

//         &:hover {
//             color: #666666;
//             transform: translateY(-2px);
//         }
//     }
// `

const Footer = () => {
    return (
        <footer className="my-4 flex justify-center">
            <a
                href="https://www.github.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 "
            >
                <SocialIcon>
                    <GitHub />
                </SocialIcon>
            </a>
            <a
                href="https://www.instagram.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 "
            >
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
            </a>
            <a
                href="https://www.twitter.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 "
            >
                <SocialIcon>
                    <Twitter />
                </SocialIcon>
            </a>
            <a
                href="https://www.youtube.com/coloradocolby"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 "
            >
                <SocialIcon>
                    <Youtube />
                </SocialIcon>
            </a>
            <a
                href="https://www.linkedin.com/in/coloradocolby/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 "
            >
                <SocialIcon>
                    <Linkedin />
                </SocialIcon>
            </a>
        </footer>
    )
}

export default Footer
