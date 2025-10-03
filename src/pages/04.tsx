import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useReducer, useState } from "react";

type Todo = {
  id: number;
  title: string;
  is_done: boolean;
};

type Action =
  | { type: "ADD"; title: string }
  | { type: "TOGGLE"; id: number }
  | { type: "DELETE"; id: number };

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), title: action.title, is_done: false },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, is_done: !todo.is_done } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default function Four() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD", title: input });
    setInput("");
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE", id });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1>TODOリスト</h1>
      <div className="flex items-center gap-4 w-full">
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={handleAdd}>追加</Button>
      </div>

      <ul className="flex flex-col gap-4 w-full">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center g-4 justify-between">
            <div className="flex items-center gap-3">
              <Checkbox
                id={todo.title}
                checked={todo.is_done}
                onCheckedChange={() => handleToggle(todo.id)}
              />
              <Label
                className={todo.is_done ? "line-through text-gray-500" : ""}
                htmlFor={todo.title}
              >
                {todo.title}
              </Label>
            </div>
            <Button
              size={"sm"}
              variant={"secondary"}
              onClick={() => handleDelete(todo.id)}
            >
              削除
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
