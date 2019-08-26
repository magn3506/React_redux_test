import React, { Component } from 'react';
import Input from "../input/input";
import Button from "../button/button";
import "./add-todo.css";

export class addTodo extends Component {
    render() {
        return (
            <div>
                <h2>Todo List...</h2>
                <form className="todo_form">
                    <Input></Input>
                    <Button label="Add Todo" isInput></Button>
                </form>
                
            </div>
        )
    }
}

export default addTodo
