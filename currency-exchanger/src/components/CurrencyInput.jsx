import React from 'react'

// components/CurrencyInput.jsx

// components/CurrencyInput.jsx
function CurrencyInput({ label, amount, currency, options, onAmountChange, onCurrencyChange, readOnly }) {
  return (
    <div className="field-group">
      <label className="field-label">{label}</label>
      <div className="field-row">
        <input
          type="number"
          value={amount}
          readOnly={readOnly}
          onChange={(e) => onAmountChange(e.target.value)}
          className="field-input"
        />
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="field-select"
        >
          {options.map((code) => (
            <option key={code} value={code}>
              {code.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default CurrencyInput