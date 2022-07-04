import React from 'react'
import './App.css'
import HelloWorld from './component/HelloWorld'
import logo from './logo.svg'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <HelloWorld/>
            </header>
        </div>
    )
}

export default App
