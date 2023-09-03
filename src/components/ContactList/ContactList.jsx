import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    let colectionForRender = contacts.filter(item => {
      return item.name
        .trim()
        .toLocaleLowerCase()
        .includes(filter.trim().toLocaleLowerCase());
    });

    return colectionForRender;
  };
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const colectionForRender = getVisibleContacts();

  return (
    <ul>
      {colectionForRender.map(item => (
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
