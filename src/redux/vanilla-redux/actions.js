import { nanoid } from 'nanoid';

 const changeFilter = text => {
  return {
    type: 'filter/changeFilter',
    payload: text,
  };
};

 const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};
