import React from "react"
import moment from "moment"
import Img from "gatsby-image"
import styled, { withTheme } from "styled-components"
import { textColor } from "../theme"
import { P } from "../components/styled"

const Title = styled.div.attrs({
    className: "font-bold text-2xl",
})`
    color: ${textColor};
    transition: color 0.5s ease-in-out;
`
const Ago = styled.div.attrs({
    className: "text-base text-xs tracking-narrow lowercase font-bold",
})`
    color: ${textColor};
    transition: color 0.5s ease-in-out;
`

const ProjectCard = ({
    theme,
    title,
    date,
    featuredImage,
    tags,
    description,
}) => {
    return (
        <div className="h-full shadow-xl flex flex-col items-start p-6 rounded-lg m-3">
            {/* <Img
                className="shadow-xl rounded-lg my-0 mx-auto"
                fixed={featuredImage}
                alt={title}
                style={{
                    maxHeight: "400px",
                }}
            /> */}

            <Title>{title}</Title>
            <Ago>{moment(date).fromNow()}</Ago>
            <P>{description}</P>
            {/* <div className="my-2">
                {tags.map((t, i) => (
                    <span
                        key={i}
                        className="inline-block bg-purple-700 rounded-full px-2 py-1 text-xs sm:text-sm font-semibold text-gray-200 mr-2 mb-1"
                    >
                        #{t}
                    </span>
                ))}
            </div> */}
        </div>
    )
}

export default withTheme(ProjectCard)
