import React, { Component } from "react";
//import { Link } from "react-router-dom";
import {ToggleLink} from "../ToggleLink";

export class CategoryNavigation extends Component {

    render() {
        return <React.Fragment>
            <ToggleLink to={this.props.baseurl} exact={true}>All
            </ToggleLink>
            {this.props.categories && this.props.categories.map(cat =>
                <ToggleLink key={cat}
                    to={`${this.props.baseurl}/${cat.toLowerCase()}`}>
                    {cat}
                </ToggleLink>

            )}
        </React.Fragment>
    }
}