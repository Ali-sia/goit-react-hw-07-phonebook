import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/slice';

import PropTypes from 'prop-types';

import Contact from '../Contact/index';
import { ContactListStyled } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizeFilter) ||
      contact.number.includes(normalizeFilter)
  );

  return (
    <ContactListStyled>
      {filteredContacts.map(contact => {
        return <Contact key={contact.contactId} contact={contact} />;
      })}
    </ContactListStyled>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
