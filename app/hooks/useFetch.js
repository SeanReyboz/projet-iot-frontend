import { useState, useEffect } from "react"

/**
 * Interroge et récupère les données de l'URL donnée.
 */
const useFetch = url => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(resp => {
        console.log(resp)
        resp.json().then(json => {
          console.log(json)
          setData(json)
        })
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false)
      })
  }, [])

  return { isLoading, data }
}

export { useFetch }
