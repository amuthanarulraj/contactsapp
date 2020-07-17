import React from 'react';
import './App.scss';
import NavBar from './nav-bar/NavBar';
import Toolbar from './toolbar/Toolbar';
import NewContact from './new-contact/NewContact';
import Contacts from './contacts/Contacts';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Contacts App',
      showAddContact: false,
      contacts: []
    };
  }

  changeAddContact(shouldShow) {
    this.setState({
      showAddContact: shouldShow
    });
  }

  addContact(contact) {
    let contacts = [];
    contacts.push(...this.state.contacts, contact);
    this.setState({
      contacts: contacts
    });
  }

  render() {
    return (
      <div>
        <NavBar title={this.state.title} />
        <Toolbar add={this.changeAddContact.bind(this)} />
        {this.state.showAddContact &&
          <NewContact add={this.addContact.bind(this)}/>
        }
        <Contacts contacts={this.state.contacts}></Contacts>
      </div>
    )
  }
}
