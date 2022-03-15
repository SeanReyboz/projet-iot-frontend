import React, { useState, useEffect } from "react"

import Params from "./parameter"
import { useFetch } from "../hooks/useFetch"

export default function Setting(props) {
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
          <h2 className={props.title}>Welcome back, John Doe</h2>
          <Params overview={users} {...props} />
        </>
      )}
    </>
  )
}
