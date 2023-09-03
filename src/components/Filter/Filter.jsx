import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const setFilters = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <label htmlFor="">
      <p>Find contacts by name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={setFilters}
      />
    </label>
  );
};

export default Filter;
