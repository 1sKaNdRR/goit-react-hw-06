import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.container}>
      <ul className={css.card}>
        {visibleContacts.map((contact) => (
          <li className={css.cardWrap} key={contact.id}>
            <Contact id={contact.id} name={contact.name} number={contact.number} onDelete={() => handleDeleteContact(contact.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
