import React, { Component } from 'react'
import classNames from "classnames";

import "./button.css";

export class button extends Component {

    

    render(props) {
        
        const {label, isSecond} = this.props;

        const classes = classNames("btn", {
            "btn--second": isSecond
        })

        return (
            <div>
                <button className={classes}>{label}</button>
            </div>
        )
    }
}

export default button
