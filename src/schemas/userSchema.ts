import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: "2文字以上入力してください" })
    .max(20, { message: "20文字以内で入力してください" }),
  email: z.email({ message: "メールアドレスの形式が正しくありません" }),
  age: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9]+$/.test(val), {
      message: "半角数字で入力してください",
    }),
});

export type FormData = z.infer<typeof userSchema>;
