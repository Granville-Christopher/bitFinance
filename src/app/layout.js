import { Inter } from 'next/font/google'
import './globals.css'
// import Navbar from '../components/navbar';
import Footer from '@/components/footer';
import Header from '../components/navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BitFinance',
  description: 'BitFinance Investment platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>

    </html>
  )
}
