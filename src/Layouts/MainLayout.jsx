import React, { Component } from 'react'
import Header from './partials/Header';

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    this is footer
                </footer>
            </div>
        )
    }
}
