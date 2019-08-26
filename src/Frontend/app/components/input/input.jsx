import React, { Component, Fragment } from 'react'
import "./input.css";

export class input extends Component {
    render() {
        return (
            <Fragment>
                <input className="input-field" type="text" placeholder="Write to do..." />
            </Fragment>
        )
    }
}

export default input
