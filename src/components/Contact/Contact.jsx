// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';
import { StyledButton } from '../App.styled';
import { ContactItem } from './Contact.styled';

const Contact = ({ contact, onDeleteContact }) => {
  const dispatch = useDispatch();
  const { contactId, name, number } = contact;

  const handleDelete = () => dispatch(deleteContact(contactId));

  return (
    <ContactItem key={contact.contactId}>
      <p>
        {name}, {number}
      </p>
      <StyledButton type="button" onClick={handleDelete}>
        Delete
      </StyledButton>
    </ContactItem>
  );
};

export default Contact;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
