import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix Madagascar - Goat",
  description: "Yeah, movies everywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased h-screen`}>
        <div className="_container h-full w-full">{children}</div>
      </body>
    </html>
  );
}
