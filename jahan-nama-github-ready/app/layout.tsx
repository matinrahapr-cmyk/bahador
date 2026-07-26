import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "آجر جهان‌نما | فروش مستقیم آجر نما",
  description: "خرید مستقیم آجر نما، دریافت قیمت پروژه، مشاوره انتخاب و ارسال سراسری.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
