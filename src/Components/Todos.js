import React, { Component } from 'react'
import MainLayout from '../Layouts/MainLayout';

export default class Services extends Component {
    state ={
        todos : [
            {"id":"1","task":"Lead Communications Manager","status":false},
            {"id":"2","task":"Product Integration Officer","status":true},
            {"id":"3","task":"Principal Marketing Facilitator","status":false},
            {"id":"4","task":"Human Usability Coordinator","status":true},
            {"id":"5","task":"Regional Intranet Agent","status":true},{"id":"6","task":"Dynamic Branding Strategist","status":true},{"id":"7","task":"Product Group Facilitator","status":false},{"id":"8","task":"Investor Identity Supervisor","status":true},{"id":"9","task":"Central Data Officer","status":true},{"id":"10","task":"Dynamic Identity Designer","status":false},{"id":"11","task":"Direct Functionality Producer","status":true},{"id":"12","task":"International Program Orchestrator","status":true},{"id":"13","task":"Senior Communications Manager","status":false},{"id":"14","task":"National Mobility Executive","status":false},{"id":"15","task":"Principal Web Designer","status":false},{"id":"16","task":"Internal Applications Assistant","status":false},{"id":"17","task":"Product Branding Representative","status":true},{"id":"18","task":"Legacy Configuration Specialist","status":false},{"id":"19","task":"Global Program Administrator","status":false},{"id":"20","task":"Central Creative Planner","status":true},{"id":"21","task":"Direct Tactics Administrator","status":true},{"id":"22","task":"Product Accounts Executive","status":true},{"id":"23","task":"District Infrastructure Analyst","status":true},{"id":"24","task":"Investor Marketing Manager","status":false},{"id":"25","task":"Dynamic Security Planner","status":false}]
    }
    handleDelete = (id) => {
        let todos = this.state.todos;
        let newTodos = todos.filter((obj) => {
            return obj.id !== id
        })
        this.setState({
            todos: newTodos
        })
    }
    handleStatus = (item) => {
        item.status = !item.status
        // let todos = this.state.todos;
        let index = this.state.todos.findIndex(obj => obj.id === item.id)
        this.state.todos[index] = item;
        this.forceUpdate();
    }
    render() {
        return (
            <MainLayout>
                <h1>Todos</h1>

                <ul className="list">
                    {
                        this.state.todos.map((todo) => {
                            return(
                                <li key={todo.id} className="list-item" > 
                                    <span className="delete" onClick={() => {this.handleDelete(todo.id)}}>delete</span>
                                    <span className={todo.status === true ? "completed": ""} onClick={() => {this.handleStatus(todo)}}>
                                        {todo.task}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </MainLayout>
        )
    }
}
