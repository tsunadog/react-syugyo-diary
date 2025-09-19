import React from "react";
import One from "../pages/01.tsx";

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
];
