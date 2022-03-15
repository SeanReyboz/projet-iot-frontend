import { useState, useEffect } from "react"

/**
 * Interroge et récupère les données de l'URL donnée.
 */
export const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    const response = await fetch(url)
    const parsed = await response.json()
    setData(parsed)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [url])

  return { isLoading, data }
}
