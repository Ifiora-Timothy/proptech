import { Darker_Grotesque, Inter, Maname } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const maname = Maname({ subsets: ['latin',"latin-ext","sinhala","vietnamese"],
  weight: ['400','400'] ,
  //create a variable to store the font weight
  variable: '--font-maname',
 })
 const grotesque = Darker_Grotesque({ subsets: ['latin',"latin-ext","vietnamese"],
  weight: ['400','500','600','700'] ,
  //create a variable to store the font weight
  variable: '--font-grotesque',
 })

export const metadata = {
  title: 'Enugu International Housing Exhibition',
  description: 'The Biggest Housing Exhibition Conference in Southern Nigeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`
      ${maname.variable}    ${grotesque.variable} 
        ${inter.className} bg-[#0A0A0A]`}>{children}</body>
    </html>
  )
}

