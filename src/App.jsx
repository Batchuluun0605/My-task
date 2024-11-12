import { useEffect, useReducer, useState } from "react";

export default function App() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `Count ${count}`;
  // }, [count]);

  const [count, dispatch] = useReducer(
    (state, action) => (action === "increment" ? state + 1 : state - 1),
    0
  );
  console.log(count);
  return (
    <div>
      <h1 className="text-3xl font-semibold">{count}</h1>
      <button
        onClick={() => dispatch("increment")}
        className="border border-green-500 p-2"
      >
        increment
      </button>
      <button
        onClick={() => dispatch("decrement")}
        className="border border-green-500 p-2"
      >
        decrement
      </button>
    </div>
  );
}
