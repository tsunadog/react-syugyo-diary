import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeContext } from "@/context/ThemeContext";
import { use } from "react";

export default function Five() {
  const ctx = use(ThemeContext);
  if (!ctx) throw new Error("Error");
  const { theme, toggleTheme } = ctx;

  return (
    <div
      className={`flex flex-col items-center gap-6 transition-colors p-8 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-3xl font-bold">テーマ切替デモ</h1>

      {/* ボタン */}
      <Button
        onClick={toggleTheme}
        variant={theme === "light" ? "default" : "secondary"}
      >
        現在のテーマ: {theme} (クリックで切り替え)
      </Button>

      {/* サンプルコンテンツ */}
      <div className="flex flex-col md:flex-row gap-4">
        <Card
          className={`transition-colors ${
            theme === "light" ? "bg-white" : "bg-gray-800 text-white"
          }`}
        >
          <CardContent>Card: テーマ連動</CardContent>
        </Card>
      </div>
    </div>
  );
}
