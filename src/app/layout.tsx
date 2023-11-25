import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './css/globals.css'
import Header from './components/Header'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-bodyFont w-full bg-main-bg text-darkText'>
        <Header/>
        {children}</body>
    </html>
  )
}