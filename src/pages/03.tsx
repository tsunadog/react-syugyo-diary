import { useQuery } from "@tanstack/react-query";

async function fetchRandomDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!res.ok) {
    throw new Error("画像の取得に失敗しました。");
  }
  return res.json();
}

export default function Three() {
  const { data, isPending, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["fetchRandomDogs"],
    queryFn: fetchRandomDog,
    refetchOnWindowFocus: false,
  });

  const handleRefetch = () => {
    refetch();
  };

  return (
    <div className="flex flex-col gap-8 items-center ">
      <div className="flex items-center justify-center w-[300px] h-[300px]">
        {isError ? (
          <p className="text-red-500">{error.message}</p>
        ) : isPending || isFetching ? (
          <p>🐕 画像を取得中...</p>
        ) : data ? (
          <img
            src={data.message}
            alt="ランダムな犬の画像"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        ) : null}
      </div>

      <button onClick={handleRefetch} disabled={isFetching}>
        別の画像を取得する
      </button>
    </div>
  );
}
