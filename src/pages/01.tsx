import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <Input
        type="text"
        value={text}
        onChange={handleChange}
        className="border p-2"
      />
      <p className="text-lg">入力中: {text}</p>
      <p className="text-2xl font-bold">{count}</p>
      <div className="flex gap-4">
        <Button onClick={decrement}>-1</Button>
        <Button onClick={increment}>+1</Button>
        <Button variant={"secondary"} onClick={reset}>
          reset
        </Button>
      </div>
    </div>
  );
}
