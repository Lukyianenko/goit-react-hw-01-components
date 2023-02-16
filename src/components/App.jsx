import PropTypes from "prop-types";
import { Profile } from '../components/profile/Profile';
import { Statistics } from '../components/statistics/Statistics';
import { FriendList } from '../components/friendList/FriendList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';


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
    </div>
   
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
})
  ).isRequired 
}

