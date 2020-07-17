import React from 'react';
import './NewContact.scss';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: ''
        };
    }

    saveContact(evt) {
        evt.preventDefault();
        this.props.add(this.state.fullname);
    }

    update(evt) {
        evt.preventDefault();
        const value = evt.target.value;
        this.setState({
            fullname: value
        });
    }

    render() {
        return (
            <div className="new-contact-card">
                <div className="field-set">
                    <label>Fullname: </label>
                    <input type="text" onChange={this.update.bind(this)} name="fullname"></input>
                </div>
                <button className="save-btn" onClick={this.saveContact.bind(this)}>Save</button>
            </div>
        )
    }
}