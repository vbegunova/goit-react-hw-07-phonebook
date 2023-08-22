import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />      
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
