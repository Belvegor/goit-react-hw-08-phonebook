import LoginForm from 'components/LoginForm/LoginForm';

import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login form</title>
      </Helmet>
      <div>
        <h1>Log In</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;