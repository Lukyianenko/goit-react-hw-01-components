import css from '../../components/friendList/FriendList.module.css';

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

