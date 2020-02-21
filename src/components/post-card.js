import React from "react"
import moment from "moment"
import Img from "gatsby-image"
export default ({ title, date, featuredImage }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Img class="w-full" fluid={featuredImage} alt={title} />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{title}</div>
            <p class="text-gray-700 text-base text-xs tracking-narrow lowercase font-bold">
                {moment(date).fromNow()}
            </p>
        </div>
    </div>
)
