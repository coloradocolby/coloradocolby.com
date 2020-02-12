import React from "react"
import { Title, Subtitle, CustomCard } from "./styled"

export default ({ title, date }) => (
    <CustomCard className={`card`}>
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
