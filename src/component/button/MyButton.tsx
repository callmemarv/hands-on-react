import React from 'react'

interface MyButtonProps {
    label: string
    onClick: () => void
}

function MyButton(props: MyButtonProps): JSX.Element {
    return (
        <button onClick={props.onClick}>{props.label}</button>
    )
}

export default MyButton
