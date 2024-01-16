import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/app/components/Header";


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="2xl:mx-60 mt-4 bg-neutral-200 font-montserrat"> <Header/>{children}</body>
    </html>
  )
}
