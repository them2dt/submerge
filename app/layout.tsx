import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./style/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Submerge - Subscription Calculator",
  description: "Calculate and visualize your subscription spending.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
