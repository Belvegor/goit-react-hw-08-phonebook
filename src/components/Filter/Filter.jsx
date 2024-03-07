import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';


const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    event.preventDefault();
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };

  return (
    <div>
      <input
        
        type="text"
        name="filter"
        onChange={changeFilter}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

export default Filter;