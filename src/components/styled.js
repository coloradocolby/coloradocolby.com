import styled from 'styled-components'
import { textColor } from '../theme'

export const ThemeTogglerWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.25em;
  color: #d4d4d4;
  cursor: pointer;
`
export const CustomCard = styled.div`
  transition: all 0.5s ease-in-out;
  background: rgba(255, 255, 255, 0.07);
  color: ${textColor};
  margin: 0 1rem;

  border-radius: 10px;

  &:hover {
    transform: translateX(0.1rem);
  }

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`
export const CardTop = styled.div`
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1em;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
    padding-bottom: 0;
  }
`

export const whiteWithTransition = styled.div`
  transition: all 0.5s ease-in-out;
  color: ${textColor};
`

export const Title = whiteWithTransition
export const Subtitle = whiteWithTransition
export const Cta = whiteWithTransition
export const ThemedDiv = whiteWithTransition
export const P = whiteWithTransition

export const SocialIcon = styled.div`
  transition: all 0.5s ease-in-out;
  color: ${textColor};
`

export const Span = styled.span`
  transition: all 0.5s ease-in-out;
  color: ${textColor};
`

export const Intro = styled.div`
  margin-top: 2em;

  @media only screen and (min-width: 1000px) {
    margin-top: 3em;
  }
`
