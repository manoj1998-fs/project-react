import { useState } from "react"
import CurrencyInput from "./CurrencyInput"
import SwapButton from "./SwapButton"
import useExchangeRate from "../hooks/useExchangeRate"
import useCurrencyList from "../hooks/useCurrencyList"
import "./CurrencyConverter.css"

function CurrencyConverter() {
  const { currencies, loading: loadingCurrencies } = useCurrencyList()
  const currencyCodes = Object.keys(currencies)

  const [amount, setAmount] = useState(100)
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")

  const { rate, loading, error } = useExchangeRate(fromCurrency, toCurrency)

  const convertedAmount = rate ? (Number(amount) * rate).toFixed(2) : ""

  function handleSwap() {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  if (loadingCurrencies) return <p>Loading currencies...</p>

  return (
    <div className="converter-wrapper">
      <img
        className="converter-image"
        src="https://images.pexels.com/photos/259251/pexels-photo-259251.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Euro banknotes fanned out"
      />

      <div className="converter-panel">
        <CurrencyInput
          label="Amount"
          amount={amount}
          currency={fromCurrency}
          options={currencyCodes}
          onAmountChange={(value) => setAmount(value)}
          onCurrencyChange={(value) => setFromCurrency(value)}
        />

        <div className="swap-row">
          <SwapButton onSwap={handleSwap} />
        </div>

        <CurrencyInput
          label="Converted to"
          amount={convertedAmount}
          currency={toCurrency}
          options={currencyCodes}
          onAmountChange={() => {}}
          onCurrencyChange={(value) => setToCurrency(value)}
          readOnly
        />

        <button className="convert-button">Convert</button>

        {loading && <p>Loading rate...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  )
}

export default CurrencyConverter