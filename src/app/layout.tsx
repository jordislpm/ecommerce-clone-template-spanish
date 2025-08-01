import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { myStoreInfo } from "../contants/general";
import { Cardo } from 'next/font/google'
import { WixClientContextProvider } from "../global/wix/wixContext";


const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-secondary',
})

const inter = Inter({ subsets: ["latin"] });

const { title, description } = myStoreInfo



export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cardo.className}>
        <Header />
        <main className="flex-1 pt-[5px] pb-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
