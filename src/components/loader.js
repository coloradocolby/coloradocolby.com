import React from "react"
import Loader from "react-loaders"

const MyLoader = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader
                type="pacman"
                active
                style={{
                    transform: "scale(0.5)",
                }}
            />
        </div>
    )
}

export default MyLoader
