import { useState } from "react";

export default function One() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex items-center flex-col gap-5">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border p-2"
      />
      <p className="text-lg">入力中: {text}</p>
      <p className="text-2xl font-bold">{count}</p>
      <div className="flex gap-4">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
