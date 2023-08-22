import { useEffect } from 'react';
import { Item, Loading } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {isLoading && !error && <Loading>Request in progress...</Loading>}
      {!filteredContacts && <p>There are no contacts!</p>}
      {filteredContacts.map(contact => {
        return (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
};

export default ContactList;
