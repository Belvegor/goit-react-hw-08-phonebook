import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

const selectFilter = state => state.filter.text;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);