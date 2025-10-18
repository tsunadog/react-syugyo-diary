import { users } from "@/data/users";
import { Link } from "react-router-dom";

export default function UserList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">ユーザー一覧</h2>

      <ul className="space-y-3">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.id}`}
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
