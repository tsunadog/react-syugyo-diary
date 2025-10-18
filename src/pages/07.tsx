import { users } from "@/data/users";
import { Link, useParams } from "react-router-dom";

export default function UserDetail() {
  // URLパラメータを取得
  const { id } = useParams<{ id: string }>();
  // IDに一致するユーザを検索
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div>
        <h2>ユーザが見つかりません。</h2>
        <Link to="/users">← 戻る</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold">{user.name} のプロフィール</h2>

      <div className="border-1 border-gray-600 p-2">
        <p>ID：{user.id}</p>
        <p>年齢：{user.age}</p>
      </div>
      <Link
        to="/users"
        className="text-blue-600 hover:underline hover:text-blue-800"
      >
        ← 一覧に戻る
      </Link>
    </div>
  );
}
