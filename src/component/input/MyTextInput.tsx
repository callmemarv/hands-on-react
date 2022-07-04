import React, { useState } from 'react'

function MyTextInput(): JSX.Element {
    const [content, setContent] = useState('')

    return (
        <input
            type={'text'}
            value={content}
            onChange={((event) => {setContent(event.target.value)})}
        />
    )
}

export default MyTextInput
