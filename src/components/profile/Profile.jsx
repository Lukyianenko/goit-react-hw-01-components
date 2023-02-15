import { Avatar, Description, ProfileDiv, ProfileText, ProfileText1, Stats, StatsEl, Label } from './profile.styled';

export const Profile = ({ username, tag, location, avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) => {
    return (
        <ProfileDiv>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
       />
    <ProfileText>{username}</ProfileText>
    <ProfileText1>@{tag}</ProfileText1>
    <ProfileText1>{location}</ProfileText1>
  </Description>

  <Stats>
    <StatsEl>
      <Label>Followers</Label>
      <span>{stats.followers}</span>
    </StatsEl>
    <StatsEl>
      <Label>Views</Label>
      <span>{stats.views}</span>
    </StatsEl>
    <StatsEl>
      <Label>Likes</Label>
      <span>{stats.likes}</span>
    </StatsEl>
  </Stats>
</ProfileDiv>
    );
    
}