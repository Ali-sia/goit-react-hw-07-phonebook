import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, addContact } from '../redux/slice';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import Title from './Title/index';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  function addNewContact(newContact) {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
    }
  }

  return (
    <Box pr={4} pl={4} color="text" width="400px">
      <Title children="Add contact" />
      <ContactForm onSubmitContact={addNewContact} />

      <Title children="Contacts" />
      <Filter />
      <ContactList />

      <GlobalStyle />
    </Box>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
