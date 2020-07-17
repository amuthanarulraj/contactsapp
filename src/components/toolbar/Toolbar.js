import React from 'react';
import './Toolbar.scss';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    showAddContact(evt) {
        evt.preventDefault();
        this.props.add(true);
    }

    render() {
        return (
            <div className="toolbar">
                <button className="add-btn" onClick={this.showAddContact.bind(this)}>Add</button>
            </div>
        )
    }
}