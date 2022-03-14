import React from "react"
import { NextRouter } from "next/router"
import Link from "next/link"

import styles from "../styles/NavBar.module.scss"

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <Profile />
      <ul className={styles.container__entry} role="navigation">
        <li className={styles.container__entryItem}>
          <div className={styles.ball}></div>
          <Link href="/">Dashboard</Link>
        </li>
        <li className={styles.container__entryItem}>
          <Link href="/">Profile</Link>
        </li>
        <li className={styles.container__entryItem}>
          <Link href="/">Paramètres</Link>
        </li>
      </ul>
    </nav>
  )
}

function Profile() {
  return (
    <div className="linkContainer">
      <Link href="/toto" shallow={false}>
        <img
          src="//picsum.photos/100/100"
          alt="Profile picture"
          style={profilePic}
        />
      </Link>
    </div>
  )
}

const profilePic = {
  borderRadius: "999px",
  display: "block",
  obejectFit: "cover",
  width: "5rem",
  height: "5rem",
  border: "3px solid #ededed",
}
