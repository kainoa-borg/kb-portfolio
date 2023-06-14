import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kainoa Borges Portfolio',
  description: 'Web Developer based in Denver, CO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar Div */}
        <div className='absolute z-10 w-1/2 h-12 items-center'>
          <ul className='flex ml-8'>
            <li><Link href='/'><button className='nav-button'>Home</button></Link></li>
            <li><Link href='/projects'><button className='nav-button'>Projects</button></Link></li>
            <li><Link href='/contact'><button className='nav-button'>Contact</button></Link></li>
          </ul>
        </div>
        {/* Other Elements */}
        {children}
      </body>
    </html>
  )
}
