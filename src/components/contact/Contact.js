import React from 'react';
import './Contact.scss';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="contact">{this.props.fullname}</div>
        )
    }
}