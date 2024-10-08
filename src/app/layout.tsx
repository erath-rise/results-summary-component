import type { Metadata } from "next";
import { Hanken_Grotesk } from 'next/font/google'
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '700', '800'],
});

export const metadata: Metadata = {
  title: "results-summary",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={hankenGrotesk.className}
      >
        {children}
      </body>
    </html>
  );
}
