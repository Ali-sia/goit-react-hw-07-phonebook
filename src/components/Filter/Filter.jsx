import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from '../../redux/slice';
// import PropTypes from 'prop-types';
import { EnterLabel, EnterInput } from '../App.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <EnterLabel>
        Filter:
        <EnterInput type="text" value={filter} onChange={onChangeFilter} />
      </EnterLabel>
    </>
  );
};

export default Filter;
