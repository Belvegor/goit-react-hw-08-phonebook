import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div>
        <span>
          {contact.name}: {contact.number}
        </span>
        <div>
          <button>Update</button>{' '}
          <button onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactListItem;