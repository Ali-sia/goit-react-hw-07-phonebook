import PropTypes from 'prop-types';
import { TitleStyle } from './Title.styledd';

const Title = ({ children }) => {
  return (
    <>
      <TitleStyle>{children}</TitleStyle>
    </>
  );
};

export default Title;

Title.propTypes = {
  children: PropTypes.string,
};
