import styled from 'styled-components'
import { textColor } from '../theme'

export const CardTop = styled.div`
  transition: all 200ms ease;
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
  transition: all 200ms ease;
  color: ${textColor};
`

export const Title = whiteWithTransition
export const Subtitle = whiteWithTransition
export const Cta = whiteWithTransition
export const ThemedDiv = whiteWithTransition
export const P = whiteWithTransition

export const SocialIcon = styled.div`
  transition: all 200ms ease;
  color: ${textColor};

  &:hover {
    transform: translateY(1px);
  }
`

export const Span = styled.span`
  transition: all 200ms ease;
  color: ${textColor};
`

export const Intro = styled.div`
  margin-top: 2em;

  @media only screen and (min-width: 1000px) {
    margin-top: 3em;
  }
`
