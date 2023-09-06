import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilteredContacts } from 'redux/selectors';
import { deleteContactThunk } from 'redux/thunk';

const ContactList = () => {
  const filteredContacts = useSelector(selectorFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <ul>
      {filteredContacts.map(item => (
        <ContactItem
          key={item.id}
          contact={item}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
