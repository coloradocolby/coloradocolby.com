import styled from "styled-components"
import { backgroundColor, textColor, hoverColor } from "../theme"

export const Main = styled.div`
    background: ${backgroundColor};
    height: 100%;
    transition: all 0.5s ease-in-out;
`

export const ThemeTogglerWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.25em;
    cursor: pointer;
    color: #d4d4d4;

    &:hover {
        color: ${hoverColor};
    }
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

export const HeaderTitle = styled.p`
    color: ${textColor};
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: ${hoverColor};
    }
`

const whiteWithTransition = styled.div`
    transition: all 0.5s ease-in-out;
    color: ${textColor};
`

export const Title = whiteWithTransition
export const Subtitle = whiteWithTransition
export const Cta = whiteWithTransition
export const P = whiteWithTransition
export const SocialIcon = styled.div`
    transition: all 0.5s ease-in-out;
    color: ${textColor};
    &:hover {
        color: ${hoverColor};
    }
`

export const NavItem = styled.div`
    color: ${textColor};
    font-size: 1rem;
    padding-top: 1rem;
    margin-right: 1.5rem;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.5s ease-in-out;

    &:hover {
        color: ${hoverColor};
    }

    @media only screen and (min-width: 1000px) {
        font-size: 1.5rem;
        font-weight: normal;
    }
`

export const Intro = styled.div`
    margin-top: 2em;

    @media only screen and (min-width: 1000px) {
        margin-top: 3em;
    }
`
