import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.card}>
        {friends.map((friend) => (
          <li className={css.cardWrap} key={friend.id}>
            <Contact id={friend.id} name={friend.name} number={friend.number} />
          </li>
        ))}
      </ul>
    </div>
  );
}
