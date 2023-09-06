import PropTypes from 'prop-types';
import React from 'react';
import { ContainerItem } from './ContactItem.styled';
const ContactItem = ({ contact, onDelete }) => {
  return (
    <ContainerItem>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <button onClick={onDelete}>Delete</button>
    </ContainerItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
