import React, { useState } from 'react'
import MyButton from '../button/MyButton'
import MyTextInput2 from './MyTextInput2'

// Imports

function SimpleForm(): JSX.Element {
    const [content, setContent] = useState('Buddy')

    return (
        <>
            <MyTextInput2
                content={content}
                onChange={(value: string) => {setContent(value)}}
            />
            <MyButton
                label={'Click me'}
                onClick={() => {alert(`Thank you, ${content}`)}}
            />
        </>
    )
}

export default SimpleForm
