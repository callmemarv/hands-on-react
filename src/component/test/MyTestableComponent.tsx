import React, { useState } from 'react'
import MyButton2 from '../button/MyButton2'

function MyTestableComponent(): JSX.Element {
    const [content, setContent] = useState('before')

    return (
        <>
            {content}
            <br/><br/><br/><br/>
            <MyButton2 onClick={() => {setContent('after')}}>Click me</MyButton2>
        </>
    )
}

export default MyTestableComponent
