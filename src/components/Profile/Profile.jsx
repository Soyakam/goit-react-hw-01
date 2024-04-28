import css from './Profile.module.css';

export default function Profile( { image, name, tag, location, stats  }) {
  return (
    <div className={css.container}>
      <div className={css.prof}>
        <img className={css.img} src={image} alt={name} />
        <p className={css.namePro}>{name}</p>
        <p className={css.tag_profile}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>

      <ul className={css.info}>
        <li className={css.profile_state}>
          <span className={css.profile_state_title}>Followers</span>
          <span className={css.profile_state_property}>{stats.followers}</span>
        </li>
        <li className={css.profile_state}>
          <span className={css.profile_state_title}>Views</span>
          <span className={css.profile_state_property}>{stats.views}</span>
        </li>
        <li className={css.profile_state}>
          <span className={css.profile_state_title}>Likes</span>
          <span className={css.profile_state_property}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}