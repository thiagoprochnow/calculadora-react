import React from 'react'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

const App = props => (
    <div className="App">
        <Router>
            <Menu></Menu>
            <Content></Content>
        </Router>
    </div>
)

export default App