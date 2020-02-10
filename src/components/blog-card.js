import React from "react"
import { Title, Subtitle } from "./styled"

export default ({ title, date }) => (
    <div className={`custom-card card m-b-md`}>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <Title className="title is-4">{title}</Title>
                    <Subtitle className="subtitle is-6">{date}</Subtitle>
                </div>
            </div>
        </div>
    </div>
)
