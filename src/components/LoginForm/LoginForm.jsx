import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

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
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>Email:</label>
        <input type="text" name="email" />
        <label>Password:</label>
        <input type="password" name="password" />
        <button type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;