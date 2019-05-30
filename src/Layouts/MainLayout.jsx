import React, { Component } from 'react'
import Header from './partials/Header.jsx';
import Footer from './partials/Footer.js';

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main className="wrapper">
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}
