import React from "react"
import moment from "moment"
import { CustomCard, CardTop, Title, Subtitle } from "./styled"

export default props => (
    <a href={props.htmlUrl} target="_blank" rel="noopener noreferrer">
        <CustomCard className="card m-b-md">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <CardTop>
                            <div className="m-b-sm">
                                <Title className="title is-4">
                                    {props.name}
                                </Title>
                                <Subtitle className="subtitle is-6">
                                    {moment(props.createdAt).fromNow()}
                                </Subtitle>
                            </div>
                            <div className="tags">
                                {props.topics.map(t => (
                                    <span
                                        key={t}
                                        className="tag is-link m-r-xs m-b-xs has-text-weight-bold"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </CardTop>
                    </div>
                </div>
                <div>{props.desc}</div>
            </div>
        </CustomCard>
    </a>
)
