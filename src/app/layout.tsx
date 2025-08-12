import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FadeInOnScroll from "@/components/ui/fadeOnScroll";
import "./globals.css";

const geistSans = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caelum",
  description: "Caelum, a melhor empresa para serviços de acessibilidade digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/logo.ico" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <FadeInOnScroll />
        {children}
      </body>
    </html>
  );
}
