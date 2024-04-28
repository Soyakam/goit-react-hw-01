import FriendListItem from "./FriendListItem";
import css from './FriendsList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friendListItem_container}>
            <FriendListItem friends={friend} />
          </li>
        );
      })}
    </ul>
  );
}



