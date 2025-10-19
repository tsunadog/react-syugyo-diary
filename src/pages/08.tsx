import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormData = {
  name: string;
  email: string;
  age: string;
};

export default function Eight() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange" });

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
          {...register("name", {
            required: "名前は必須です",
            minLength: { value: 2, message: "2文字以上入力してください" },
            maxLength: { value: 20, message: "20文字以内で入力してください" },
          })}
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
          {...register("email", { required: "メールアドレスは必須です" })}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="age">年齢</Label>
        {errors.age && (
          <p className="text-left text-sm text-red-500">{errors.age.message}</p>
        )}
        <Input
          type="text"
          id="age"
          placeholder="例：25"
          {...register("age", {
            pattern: {
              value: /^[0-9]+$/,
              message: "半角数字で入力してください",
            },
          })}
        />
      </div>

      <Button type="submit" disabled={!isValid}>
        登録する
      </Button>
    </form>
  );
}
