import React from 'react'

function HeadsOrTails(): JSX.Element {
    let content = 'Heads'

    if (Math.random() < 0.5) {
        content = 'Tails'
    }

    return (
        <p>{content}</p>
    )
}

export default HeadsOrTails
