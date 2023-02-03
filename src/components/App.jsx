// import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getError, getIsLoading } from '../redux/selectors';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import Title from './Title/index';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box pr={4} pl={4} color="text" width="400px">
      <Title children="Add contact" />
      <ContactForm />

      <Title children="Contacts" />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && !error && <b>DONE</b>}
      <ContactList />

      <GlobalStyle />
    </Box>
  );
};

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   filter: PropTypes.string,
// };
