import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input className={css.searchArea} type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}
