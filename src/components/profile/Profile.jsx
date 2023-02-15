import { Avatar, Description, ProfileDiv, ProfileText, ProfileText1, Stats, StatsEl, Label } from './profile.styled';

export const Profile = ({ username, tag, location, avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) => {
    return (
        <ProfileDiv class="profile">
  <Description class="description">
    <Avatar
      src={avatar}
      alt={username}
      class="avatar"
    />
    <ProfileText class="name">{username}</ProfileText>
    <ProfileText1 class="tag">@{tag}</ProfileText1>
    <ProfileText1 class="location">{location}</ProfileText1>
  </Description>

  <Stats class="stats">
    <StatsEl>
      <Label class="label">Followers</Label>
      <span class="quantity">{stats.followers}</span>
    </StatsEl>
    <StatsEl>
      <Label class="label">Views</Label>
      <span class="quantity">{stats.views}</span>
    </StatsEl>
    <StatsEl>
      <Label class="label">Likes</Label>
      <span class="quantity">{stats.likes}</span>
    </StatsEl>
  </Stats>
</ProfileDiv>
    );
    
}