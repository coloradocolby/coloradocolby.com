import React from 'react'
import styled, { withTheme } from 'styled-components'
// import layoutStyles from "./layout.module.scss"
import { backgroundColor } from '../theme'
import Footer from './footer'
import Navbar from './navbar'

const Main = styled.main`
  background: ${backgroundColor};
  transition: all 200ms ease;
  overflow-x: hidden;
  overflow-y: auto;
`

const SVG_CONFIG = {
  SIZE: '700px',
  DARK: '#2d3748',
  LIGHT: '#D6E1EC',
}

const SVG = styled.svg`
  height: ${SVG_CONFIG.SIZE};
  flex: 0 0 auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
    padding-bottom: 0;
  }
`

const ShiftUp = styled.div`
  margin-top: -${SVG_CONFIG.SIZE};
`

const Layout = props => {
  if (props.theme?.mode) {
    return (
      <Main>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 600">
            <path
              style={{
                fill: `${
                  props.theme.mode === 'light'
                    ? SVG_CONFIG.LIGHT
                    : SVG_CONFIG.DARK
                }`,
                transition: 'all 200ms ease',
              }}
              className="curve"
              d="M.5.5v508s364,107,996,92S2139,335,3010,297s991,54,991,54L4000.5.5Z"
            />
          </SVG>
        </div>

        <ShiftUp>
          <div className="flex flex-col max-w-screen-lg min-h-screen px-10 mx-auto my-0">
            <Navbar />
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
