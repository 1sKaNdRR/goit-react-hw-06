import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, addContact, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleAddContact = (newContact) => {
    dispatch(addContact({ ...newContact, id: Date.now() }));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (name) => {
    dispatch(changeFilter(name));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.card}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList friends={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
}
