import React, { useState } from 'react';
import { ContainerForma, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/selectors';
import { addNewContactThunk } from 'redux/thunk';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const items = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const isDuplicate = data => {
    let isDuplicate = items.find(elem => {
      return elem.name.toLowerCase() === data.name.toLowerCase();
    });
    if (isDuplicate) {
      alert(`${data.name} is alredy in contacts!`);
      return true;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (isDuplicate({ name, phone })) {
      return;
    }

    dispatch(addNewContactThunk({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <ContainerForma onSubmit={onSubmit}>
      <Label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChange}
        />
      </Label>
      <Label htmlFor="">
        Phone
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={onChange}
        />
      </Label>
      <button type="submit" onSubmit={onSubmit}>
        Add contact
      </button>
    </ContainerForma>
  );
};

export default ContactForm;
