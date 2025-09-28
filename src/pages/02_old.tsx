import { useEffect, useState } from "react";

type dataProps = {
  message: string;
  status: "success";
};

export default function Two() {
  const [data, setData] = useState<dataProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // APIからデータを取得
  const fetchData = async () => {
    try {
      setData(null);
      setLoading(true);
      setError(null);
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!res.ok) throw new Error("Fetch failed");
      const json: dataProps = await res.json();
      setData(json);
    } catch (err) {
      setError("画像の取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // 初回だけ実行

  return (
    <div className="flex flex-col gap-8 items-center ">
      <div className="flex items-center justify-center w-[300px] h-[300px]">
        {loading && <p>🐕 画像を取得中...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data && (
          <img
            src={data.message}
            alt="ランダムな犬の画像"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <button onClick={fetchData}>別の画像を取得する</button>
    </div>
  );
}
