"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  console.log("blah");

  return (
    <div>
      <div>Count: {count}</div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="py-2 px-4 rounded bg-white text-black font-bold hover:cursor-pointer"
        >
          -
        </button>
        <button
          onClick={increment}
          className="py-2 px-4 rounded bg-white text-black font-bold hover:cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};
