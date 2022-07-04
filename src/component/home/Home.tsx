import React from 'react'
import logo from '../../logo.svg'
import HelloWorld from '../HelloWorld'
import './Home.css'

function Home(): JSX.Element {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <HelloWorld/>
        </header>
    )
}

export default Home
