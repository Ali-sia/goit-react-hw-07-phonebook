import { useState } from 'react';
import { addContact } from '../../redux/operations';
import { getContacts } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';
import { Box } from '../Box';
import { EnterLabel, EnterInput, StyledButton } from '../App.styled';
import { nanoid } from '../../../node_modules/nanoid/index';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setNumber(e.currentTarget.value);
  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));

      setName('');
      setNumber('');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      as="form"
      onSubmit={handleSubmit}
    >
      <EnterLabel>
        Name:
        <EnterInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
        />
      </EnterLabel>

      <EnterLabel>
        Number:
        <EnterInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
        />
      </EnterLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </Box>
  );
};

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
// };

export default ContactForm;
