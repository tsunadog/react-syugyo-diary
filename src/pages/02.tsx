import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Two() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
    alert(`カウントが${count + 1}になりました`);
  };

  // useEffect(() => {
  //   if (count > 0) {
  //     alert(`カウントが${count}になりました`);
  //   }
  // }, [count]);

  return (
    <div className="flex items-center flex-col gap-5">
      <p className="text-2xl font-bold">{count}</p>
      <div className="flex gap-4">
        <Button onClick={increment}>+1</Button>
      </div>
    </div>
  );
}
