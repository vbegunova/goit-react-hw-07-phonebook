import { Container } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Container>
      <label htmlFor="filter-input">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        id="filter-input"
      />
    </Container>
  );
};

export default Filter;
