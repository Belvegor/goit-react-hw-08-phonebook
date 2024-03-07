import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();

    const formattedNumber = number.replace(/(\d{3})(?=\d)/g, '$1-');

    const newContact = {
      name: name,
      number: formattedNumber,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        
        type="text"
        name="name"
        placeholder="Name: full name"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <input
        
        type="number"
        name="number"
        placeholder="Phone number: seven digits"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">
        Add contact
      </button>
    </form>
  );
};



export default ContactForm;