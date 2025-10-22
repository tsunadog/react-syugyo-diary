import { userSchema, type FormData } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Nine() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mx-auto max-w-[520px]"
    >
      <h2 className="font-bold">ユーザー登録フォーム</h2>

      <div className="flex flex-col gap-3">
        <Label htmlFor="name">名前</Label>
        {errors.name && (
          <p className="text-left text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
        <Input
          type="text"
          id="name"
          placeholder="例：サンプル太郎"
          {...register("name")}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="email">メールアドレス</Label>
        {errors.email && (
          <p className="text-left text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
        <Input
          type="email"
          id="email"
          placeholder="例：example@example.com"
          {...register("email")}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="age">年齢</Label>
        {errors.age && (
          <p className="text-left text-sm text-red-500">{errors.age.message}</p>
        )}
        <Input type="text" id="age" placeholder="例：25" {...register("age")} />
      </div>

      <Button type="submit" disabled={!isValid}>
        登録する
      </Button>
    </form>
  );
}
