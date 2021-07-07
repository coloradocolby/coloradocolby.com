import { Link } from 'gatsby'
import React from 'react'
import {
  HomeIcon,
  InboxInIcon,
  NewspaperIcon,
  TerminalIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/outline'
import styled, { withTheme } from 'styled-components'
import { useTheme } from '../contexts/theme.context'
import { backgroundColor, textColor } from '../theme'

const Ul = styled.ul`
  display: flex;
  margin: 0;
  justify-content: center;
`

const Li = styled.li`
  margin: 0.25em 0.35em;
  padding: 0.5em;
  transition: background 200ms ease;
  color: ${textColor};
  border-radius: 50%;
  cursor: pointer;
  }
`

const Navbar = ({ theme }) => {
  const { toggle } = useTheme()

  return (
    <header className="mb-12">
      <nav className="my-2">
        <Ul>
          {[
            {
              link: '/',
              icon: <HomeIcon className="w-6 h-6" />,
            },
            {
              link: '/projects/',
              icon: <TerminalIcon className="w-6 h-6" />,
            },
            {
              link: '/posts/',
              icon: <NewspaperIcon className="w-6 h-6" />,
            },
            {
              link: '/contact/',
              icon: <InboxInIcon className="w-6 h-6" />,
            },
          ].map(({ link, icon }) => (
            <Link
              to={link}
              key={link}
              activeClassName={`active-link-${theme?.mode}`}
            >
              <Li>{icon}</Li>
            </Link>
          ))}
          <Li onClick={() => toggle()}>
            {theme.mode === 'light' ? (
              <MoonIcon className="w-6 h-6" />
            ) : (
              <SunIcon className="w-6 h-6" />
            )}
          </Li>
        </Ul>
      </nav>
    </header>
  )
}

export default withTheme(Navbar)
