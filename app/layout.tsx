import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "../public/styles/style.css";
import LayoutCmpnt from "@/app/components/LayoutCmpnt";
import { ShowModalProvider } from "./context/ModalShow";

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
        <ShowModalProvider>
          <body>{children}</body>
        </ShowModalProvider>
      </LayoutCmpnt>
    </html>
  );
}
