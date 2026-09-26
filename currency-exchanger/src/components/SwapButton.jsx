// components/SwapButton.jsx
function SwapButton({ onSwap }) {
  return (
    <button onClick={onSwap} aria-label="Swap currencies">
      ⇅
    </button>
  )
}

export default SwapButton