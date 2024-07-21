import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ id, number, name }) {
  const dispatch = useDispatch();

  return (
    <div className={css.friendWrap}>
      <div>
        <p><FaUser />  {name} </p>
        <p><FaPhoneAlt />  {number} </p>
      </div>
      <button className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
}