import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IC Drive",
  description: "Google drive but on the blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-black`}>{children}</body>
    </html>
  );
}
