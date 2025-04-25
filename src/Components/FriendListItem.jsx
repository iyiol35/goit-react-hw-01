import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;

    return (

        <div className={styles.cardContainer}>
            <li className={styles.card}>
                <img className={styles.avatar} src={avatar} alt={name} />
                <p className={styles.name}>{name}</p>
                <p className={isOnline ? styles.online : styles.offline}>
                    {isOnline ? "Online" : "Offline"}
                </p>
            </li>
        </div>


    );
};

export default FriendListItem;
