import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "烹小鲜｜娱乐内容营销与MCN机构",
  description: "烹小鲜专注娱乐与影视垂直领域，提供影视营销、品牌营销、艺人营销、MCN、直播电商与代运营服务。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
