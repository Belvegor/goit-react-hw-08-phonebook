import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register form</title>
      </Helmet>
      <div>
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;