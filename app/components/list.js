import React from "react";

export default function List({ list, ...styles }) {
  return (
    <ul className={styles.grid}>
      {list.map((item) => {
        return <ListItem key={item.id} item={item} styles={styles} />;
      })}
    </ul>
  );
}

const ListItem = ({ item, styles }) => {
  return (
    <li
      className={styles.card}
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        cursor: "help",
      }}
    >
      <img
        src={item.avatar_url}
        alt="User's avatar"
        style={profilePic}
        loading="lazy"
      />
      <code className={styles.code}>{item.login}</code>
    </li>
  );
};

const profilePic = {
  borderRadius: "999px",
  display: "block",
  obejectFit: "cover",
  width: "4rem",
  height: "4rem",
};
