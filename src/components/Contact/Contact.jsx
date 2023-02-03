// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getIsLoading } from '../../redux/selectors';

import { StyledButton } from '../App.styled';
import { ContactItem } from './Contact.styled';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const { id, name, number } = contact;
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem key={id}>
      <p>
        {name}, {number}
      </p>
      <StyledButton type="button" disabled={isLoading} onClick={handleDelete}>
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
