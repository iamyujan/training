import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div>&copy; {new Date().getFullYear()}. All Rights Reserved.</div>
                <div className="text-right">Made with love by <span>Bishnu Raj Kumar Thapa</span></div>
            </footer>
        )
    }
}
