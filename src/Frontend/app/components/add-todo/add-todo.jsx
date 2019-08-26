import React, { Component, Fragment } from 'react';
import Input from "../input/input";
import Button from "../button/button";
import "./add-todo.css";

export class addTodo extends Component {
    render() {
        return (
            <Fragment>
                <form className="todo_form">
                    <Input></Input>
                    <Button label="Add Todo" isInput></Button>
                </form>
                
            </Fragment>
        )
    }
}

export default addTodo
