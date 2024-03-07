import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
    <>
     <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField id="outlined-basic" label="Name:" required variant="outlined" type="text" name="name"  title="Your name"/>
        <TextField id="outlined-basic" label="Phone Number:" variant="outlined" required type="number" name="number" title="Phone number must contain digits."/>
        <Stack spacing={2} direction="row">
          <Button variant="contained"  type="submit">Add Contact</Button>
        </Stack>
      </Box>  
  </>
  );
};



export default ContactForm;