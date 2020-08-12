import React from 'react'
import { GitHub, Instagram, Linkedin, Twitter, Youtube } from 'react-feather'
import { SocialIcon } from './styled'

const Footer = () => {
  return (
    <footer>
      <ul className="flex justify-center">
        <li className="mx-4">
          <a
            className="px-5"
            href="https://www.github.com/coloradocolby"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github account"
          >
            <SocialIcon>
              <GitHub />
            </SocialIcon>
          </a>
        </li>
        <li className="mx-4">
          <a
            className="px-5"
            href="https://www.instagram.com/coloradocolby"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram account"
          >
            <SocialIcon>
              <Instagram />
            </SocialIcon>
          </a>
        </li>
        <li className="mx-4">
          <a
            className="px-5"
            href="https://www.twitter.com/coloradocolby"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter account"
          >
            <SocialIcon>
              <Twitter />
            </SocialIcon>
          </a>
        </li>
        <li className="mx-4">
          <a
            className="px-5"
            href="https://www.youtube.com/coloradocolby"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="youtube account"
          >
            <SocialIcon>
              <Youtube />
            </SocialIcon>
          </a>
        </li>
        <li className="mx-4">
          <a
            className="px-5"
            href="https://www.linkedin.com/in/coloradocolby"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin account"
          >
            <SocialIcon>
              <Linkedin />
            </SocialIcon>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
