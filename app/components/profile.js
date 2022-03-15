import React, { useState, useEffect } from "react"

import Overview from "./overview"
import { useFetch } from "../hooks/useFetch"

export default function Profile(props) {
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
          <h2 className={props.title}>Profile</h2>
          <Overview overview={users} {...props} />
        </>
      )}
    </>
  )
}
