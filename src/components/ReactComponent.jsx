import { useState } from 'react'

export default function ReactCounter() {
  const [count, setCount] = useState(0)

  function resetCounter() {
    setCount(0)
  }

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <div>Count: {count}</div>
      <div className="flex gap-4 text-base mt-2">
        <button
          onClick={increment}
          className="bg-sky-500 text-white rounded px-2 py-2"
        >
          Increment
        </button>

        <button
          onClick={resetCounter}
          className="bg-sky-500 text-white rounded px-2 py-2"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
