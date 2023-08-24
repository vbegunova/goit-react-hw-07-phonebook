import { useEffect } from 'react';
import { Item, Loading } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error && <Loading>Request in progress...</Loading>}
      {!contacts && <p>There are no contacts!</p>}
      {contacts.map(contact => {
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
