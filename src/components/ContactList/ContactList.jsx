import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

 

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
     
   

    return (
        <ul className={styles.list}>
            {filteredContacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact}
                        number={contact.name}
                        id={contact.id } />
                </li>
            ))}
      </ul>
    )

}



export default ContactList;