import React, { PropsWithChildren } from 'react'

interface MyButton2Props {
    type?: 'button' | 'reset' | 'submit'
    onClick: () => void
}

function MyButton2(props: PropsWithChildren<MyButton2Props>): JSX.Element {
    return (
        <button type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default MyButton2
