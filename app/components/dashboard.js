import React, { useState, useEffect } from "react"

import List from "./list"
import { useFetch } from "../hooks/useFetch"
import Link from "next/link"

export default function Dashboard(props) {
  console.log(props)

  const url = "https://api.github.com/users"

  const { isLoading, data } = useFetch(url)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(data)
  }, [data])

  return (
    <>
      {isLoading ? (
        <code>Retrieving data... Please wait...</code>
      ) : (
        <>
          <h2 className={props.title}>
            Bonjour,{" "}
            <a>
              {" "}
              <Link href="/profile">John Doe </Link>
            </a>
          </h2>
          <List list={users} {...props} />
        </>
      )}
    </>
  )
}
