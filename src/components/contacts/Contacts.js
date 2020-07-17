import React from 'react';
import './Contacts.scss';
import Contact from './../contact/Contact';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let count = 0;
        let contactList = this.props.contacts.map(c => {
            count++;
            return <Contact key={count} fullname={c}/>
        });
        return (
            <div className="contact-list">{contactList}</div>
        )
    }
}