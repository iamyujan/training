import React, { Component } from 'react'
import MainLayout from '../Layouts/MainLayout';

export default class Home extends Component {
    state = {
        name: 'Biplav'
    }
    handleChange = (e) => {
        this.setState({
            name: e
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name : e.target.name.value
        })
        e.target.reset();
    }
    render() {
        return (
            <MainLayout>
                <h1>Welcome, {this.state.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Change My Name</label><br/>
                    {/* <input type="text" onChange={this.handleChange} name="name"/><br/> */}
                    <input type="text" name="name"/><br/>
                    <input type="submit" value="Change the name"/>
                </form>
                <br/>
                <br/>
            </MainLayout>
        )
    }
}
