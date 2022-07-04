import React from 'react'

function WishList(): JSX.Element {
    const elements = ['Candy', 'Pony', 'Fire Truck']
        .map((element) => {
            return <li>{element}</li>
        })

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default WishList
