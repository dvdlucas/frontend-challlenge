import type { Metadata } from "next";
import "./globals.css";
import { Saira } from "next/font/google";
import { Header } from "../components/header";
import { DefaultProvider } from "@/components/default-providers";


const saira = Saira({
  weight: ["300", "400", "500", "500"],
  subsets: ["latin"]
});

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
    <html lang="pt-br">
      <body className={saira.className}>
        <DefaultProvider>
          <Header />
          {children}
        </DefaultProvider>
      </body>
    </html>
  );
}
