import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(login(loginData));
    form.reset();
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
        <TextField id="outlined-basic" label="Email:" variant="outlined" type="email" name="email"/>
        <TextField id="outlined-basic" label="Password:" variant="outlined" type="password" name="password"/>
        <Stack spacing={2} direction="row">
          <Button variant="contained"  type="submit">Login</Button>
        </Stack>
      </Box>    
    </>
  );
};

export default LoginForm;