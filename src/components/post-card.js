import React from "react"
import moment from "moment"
import Img from "gatsby-image"
import styled, { withTheme } from "styled-components"
import { textColor } from "../theme"
import { P } from "../components/styled"

const Title = styled.div.attrs({
    className: "font-bold text-2xl tracking-wide",
})`
    color: ${textColor};
    transition: color 0.5s ease-in-out;
`
const Ago = styled.div.attrs({
    className: "text-base text-xs tracking-narrow font-bold",
})`
    color: ${textColor};
    transition: color 0.5s ease-in-out;
`

const PostCard = ({ title, date, description }) => {
    return (
        <div className="shadow-lg rounded-lg m-3 lift-on-hover">
            <div className="px-6 py-4">
                <div className="flex flex-col justify-center">
                    <Title>{title}</Title>
                    <Ago>{moment(date).fromNow()}</Ago>
                    <P>{description}</P>
                </div>
            </div>
        </div>
    )
}

export default withTheme(PostCard)
