import React from 'react'

function HeadsOrTails2(): JSX.Element {
    const result = Math.random() < 0.5

    return (
        <p>{result ? 'Tails' : 'Heads'}</p>
    )
}

export default HeadsOrTails2
