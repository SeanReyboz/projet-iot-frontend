import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import styles from "../styles/NavBar.module.scss"

export default function NavBar() {
  const router = useRouter()
  return (
    <nav className={styles.container}>
      <Profile />
      <ul className={styles.container__entry} role="navigation">
        <li
          className={`${styles.container__entryItem} ${
            router.pathname == "/" ? styles.outline : ""
          }`}
        >
          <div className={router.pathname == "/" ? styles.ball : ""}></div>
          <Link href="/">
            <img className={styles.icons} src="/icons/home.svg" />
          </Link>
        </li>
        <li
          className={`${styles.container__entryItem} ${
            router.pathname == "/parameter" ? styles.outline : ""
          }`}
        >
          <div
            className={router.pathname == "/parameter" ? styles.ball : ""}
          ></div>
          <Link href="/parameter">
            <img className={styles.icons} src="icons/parameter.svg" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function Profile() {
  const router = useRouter()
  return (
    <div className="linkContainer">
      <div
        className={router.pathname == "/profile" ? styles.ballprofile : ""}
      ></div>
      <Link href="/profile" shallow={false}>
        <img
          src="//picsum.photos/100/100"
          alt="Profile picture"
          className={`${styles.profilePic} ${
            router.pathname == "/profile" ? styles.halo : ""
          }`}
        />
      </Link>
    </div>
  )
}
