import { Profile } from '../components/profile/Profile';
import { Statistics } from '../components/statistics/Statistics';
import { FriendList } from '../components/friendList/FriendList';
import { TransactionHistory } from '../components/transactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transaction from '../transactions.json';


export const App = () => {
  return (
    <div

      style={{
       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginTop: 50,
      }}
    >
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      <Statistics stats={data}/>
      <FriendList friend={friends}/>
      <TransactionHistory datas={transaction} />
    </div>
   
  );
};



