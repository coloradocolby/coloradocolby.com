import React from "react"
import moment from "moment"

import styles from "./project-card.module.scss"

export default props => (
    <a href={props.htmlUrl} target="_blank" rel="noopener noreferrer">
        <div className={`${styles.projectCard} card m-b-md`}>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <div className={styles.cardTop}>
                            <div className="m-b-sm">
                                <p className="title is-4">{props.name}</p>
                                <p className="subtitle is-6">
                                    {moment(props.createdAt).fromNow()}
                                </p>
                            </div>
                            <div
                                className={styles.tags}
                                style={
                                    {
                                        // display: "flex",
                                        // flexDirection: "row-reverse",
                                        // flexWrap: "wrap",
                                        // maxWidth: "10px",
                                    }
                                }
                            >
                                {props.topics.map(t => (
                                    <span
                                        key={t}
                                        className="tag is-link m-r-xs m-b-xs has-text-weight-bold"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">{props.desc}</div>
            </div>
        </div>
    </a>
)
