import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Kainoa Borges Portfolio',
//   description: 'Web Developer based in Denver, CO',
// }

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Kainoa Borges Dev</title>
        <meta name='descriptions' content='Software Developer based in Denver, CO'></meta>
      </head>
      <body className={inter.className}>
        {/* Navbar Div */}
        <div className='absolute z-10 w-1/2 h-12 items-center bg-[#456573]'>
            <ul className='flex ml-8'>
              <li><Link href='/home'><button className='nav-button'>Home</button></Link></li>
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
