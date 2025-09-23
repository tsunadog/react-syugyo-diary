import React from "react";
import One from "../pages/01.tsx";
import Two from "../pages/02.tsx";

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
    title: "Day2:useEffect と依存配列（APIからデータ取得）",
  },
];
