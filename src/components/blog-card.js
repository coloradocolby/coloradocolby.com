import React from "react"

export default ({ title, date }) => (
    <div className={`custom-card card m-b-md`}>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{date}</p>
                </div>
            </div>
        </div>
    </div>
)
