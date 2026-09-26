// hooks/useExchangeRate.js
import { useState, useEffect } from "react"

function useExchangeRate(fromCurrency, toCurrency) {
  const [rate, setRate] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    const from = fromCurrency.toLowerCase()
    const to = toCurrency.toLowerCase()

    async function fetchRate() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
        )
        if (!res.ok) throw new Error("Failed to fetch rate")

        const data = await res.json()

        if (!ignore) {
          setRate(data[from][to])
        }
      } catch (err) {
        if (!ignore) setError(err.message)
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    fetchRate()

    return () => {
      ignore = true
    }
  }, [fromCurrency, toCurrency])

  return { rate, loading, error }
}

export default useExchangeRate