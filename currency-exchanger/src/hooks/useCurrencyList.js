// hooks/useCurrencyList.js
import { useState, useEffect } from "react"

function useCurrencyList() {
  const [currencies, setCurrencies] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false

    async function fetchCurrencies() {
      try {
        const res = await fetch(
          "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
        )
        const data = await res.json()
        if (!ignore) setCurrencies(data)
      } catch (err) {
        console.error("Failed to load currency list", err)
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    fetchCurrencies()

    return () => {
      ignore = true
    }
  }, []) // empty array = run once, on mount only

  return { currencies, loading }
}

export default useCurrencyList