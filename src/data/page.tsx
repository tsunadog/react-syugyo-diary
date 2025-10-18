import React from "react";
import One from "../pages/01.tsx";
import Two from "../pages/02.tsx";
import Three from "../pages/03.tsx";
import Four from "../pages/04.tsx";
import Five from "@/pages/05.tsx";
import UserList from "@/pages/06.tsx";

type pageType = {
  path: string;
  page: React.ReactNode;
  title: string;
};

export const page: pageType[] = [
  {
    path: "01",
    page: <One />,
    title: "Day1：useState の型付けと初期値（カウンターアプリ）",
  },
  {
    path: "02",
    page: <Two />,
    title: "Day2:useEffectと依存配列",
  },
  {
    path: "03",
    page: <Three />,
    title: "Day3:TanStack QueryでAPIデータを取得",
  },
  {
    path: "04",
    page: <Four />,
    title: "Day4:useReducerと型定義（TODOアプリ）",
  },
  {
    path: "05",
    page: <Five />,
    title: "Day5:Context API + TypeScript 型の渡し方（テーマ切替アプリ）",
  },
  {
    path: "05",
    page: <Five />,
    title: "Day6:カスタムHookの作成（useLocalStorage）",
  },
  {
    path: "users",
    page: <UserList />,
    title: "Day7:動的ルーティングとパラメータ型（ユーザ詳細ページ）",
  },
];
