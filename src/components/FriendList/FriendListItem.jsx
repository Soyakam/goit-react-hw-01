
import css from "./FriendListItem.module.css"

export default function FriendListItem({ friends: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendListItem}>
      <img
        className={css.friendListItem_avatar}
        src={avatar}
        alt="Avatar"
        width="48" />
      <p className={css.friendListItem_name}>{name}</p>
      {isOnline ? (
        <p className={css.friendListItem_online}>Online</p>
      ) : (
        <p className={css.friendListItem_offline}>Offline</p>
      )}
    </div>
  );
}
