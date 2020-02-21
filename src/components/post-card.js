import React from "react"
import { Title, Subtitle, CustomCard } from "./styled"
import Img from "gatsby-image" // example usage below

export default ({ title, featuredImage, date }) => (
    <CustomCard className={`card`}>
        <div className="card-image">
            <Img fluid={featuredImage} alt={title} className="is-square" />
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content is-clipped p-sm">
                    <Title className="title is-4">{title}</Title>
                    <Subtitle className="subtitle is-6">{date}</Subtitle>
                </div>
            </div>
        </div>
    </CustomCard>
)
