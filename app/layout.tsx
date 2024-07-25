import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "../public/styles/style.css";
import { useEffect } from "react";
import LayoutCmpnt from "@/components/LayoutCmpnt";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "حامد رجبی فرجاد",
  description: "رزومه حامد رجبی فرجاد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LayoutCmpnt>
        <body className={inter.className}>{children}</body>
      </LayoutCmpnt>
    </html>
  );
}
