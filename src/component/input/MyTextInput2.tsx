import React, { ChangeEvent } from 'react'

interface MyTextInput2Properties {
    content: string
    onChange: (value: string) => void
}

function MyTextInput2(props: MyTextInput2Properties): JSX.Element {
    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const content = event.target.value
        props.onChange(content)
    }

    return (
        <input type={'text'} value={props.content} onChange={handleChange}/>
    )
}

export default MyTextInput2
