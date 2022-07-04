import React from 'react'

function WishList2(): JSX.Element {
    const elements = ['Candy', 'Pony', 'Fire Truck']

    return (
        <ol>
            {elements.map((element) => {
                return <li>{element}</li>
            })}
        </ol>
    )
}

export default WishList2
