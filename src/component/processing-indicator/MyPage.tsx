import React, { useState } from 'react'
import MyComponent from './MyComponent'

function MyPage(): JSX.Element {
    const [processing, setProcessing] = useState(false)

    return processing
        ? <>'Processing...'</>
        : <MyComponent setProcessing={setProcessing}/>
}

export default MyPage
