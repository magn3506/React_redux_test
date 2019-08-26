import React, { Component, Fragment } from 'react'
import classNames from "classnames";

import "./button.css";

export class button extends Component {

    

    render(props) {
        
        const {label, isInput} = this.props;

        const classes = classNames("btn", {
            "btn--input": isInput
        })

        return (
            <Fragment>
                <button className={classes}>{label}</button>
            </Fragment>
        )
    }
}

export default button
