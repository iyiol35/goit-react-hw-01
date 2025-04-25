import React from 'react'
import css from "./SocialMedia.module.css";
console.log(css)
const userData = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308
    }
};

const SocialMedia = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
        </>
    );
};
function Profile(props) {
    const { name, tag, location, image, stats } = props;
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img src={image} alt="User avatar" className={css.avatar} />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>


    )
};
export default SocialMedia;
