import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src="http://www.worldsquash.org/wp-content/uploads/2019/02/Squash57_CMYK.png" alt="logo"/>
                </div>
                <div className="navigation">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/todos">Todos</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </header>
        )
    }
}
