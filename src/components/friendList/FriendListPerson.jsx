import css from '../../components/friendList/FriendList.module.css';
import PropTypes from "prop-types";

export const FriendListPerson = ({ persons }) => {
    return (persons.map(( {avatar, name, isOnline, id}) => (
        <li className={css.items} key={id}>
        <span className={`${css.status} ${css[isOnline]}`}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>
    ))
    )
}

FriendListPerson.propTypes = {
    persons: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.oneOf([true, false]),
  })
    ).isRequired 
  }