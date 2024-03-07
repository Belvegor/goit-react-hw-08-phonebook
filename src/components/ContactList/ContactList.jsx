import React from 'react';import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { selectFilteredContacts } from '../../redux/filter/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;