import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Header from "../components/partials/Header";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  weight: ["500", "600"],
  subsets: ["latin"],
});
const loosWideBold = localFont({
  src: [{ path: "../fonts/loos-wide-bold.otf", weight: "700" }],
  variable: "--font-loosWideBold",
});

export const metadata: Metadata = {
  title: "Superdao",
  description:
    "An all-in-one platform to start, manage and grow a decentralized autonomous organization",
  icons: [
    {
      rel: "icon",
      url: "/static/favicon.svg",
      type: "image/x-icon",
      sizes: "36x36",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          montserrat.className,
          loosWideBold.variable,
          "bg-blue-dark-950 font-medium text-white"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
