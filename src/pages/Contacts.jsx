import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/Form/ContactForm';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Helmet>
        <title>hw8 - Contacts list</title>
      </Helmet>
      <div>
        <div>
          <div>
            <p>Search</p>
            <Filter />
            <p>Add contact</p>
            <ContactForm />
          </div>
          <div>
            <p>Contacts list</p>
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;