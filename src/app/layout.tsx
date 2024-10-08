import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google"
import "../styles/globals.scss";

const interTight = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        {children}
      </body>
    </html>
  );
}
