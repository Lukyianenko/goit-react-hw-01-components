import css from '../../components/friendList/FriendList.module.css';
import { FriendListPerson } from '../../components/friendList/FriendListPerson';

export const FriendList = ({friend}) => {
    return (<ul className={css.friendList}>
        <FriendListPerson persons={friend}/>
    </ul>);
}