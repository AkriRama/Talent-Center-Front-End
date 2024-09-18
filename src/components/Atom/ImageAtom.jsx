import React from "react"

export default function ImageAtom({ alternative, image, isThere=true, styleSX, testid="image-element" }) {
    return (
        isThere  ? <img 
            src={image}
            alt={alternative}
            data-testid={testid}
            style={ styleSX }
        /> : null
    )
}