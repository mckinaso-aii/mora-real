import type { Metadata } from 'next'
import { Inter, Roboto, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Mora Real S.A. - Reporte de Inteligencia de Negocio',
  description: 'Análisis de ROI y oportunidades de automatización para Mora Real S.A.',
  keywords: ['Mora Real', 'ROI', 'Inteligencia de Negocio', 'Automatización', 'Centro Médico'],
  authors: [{ name: 'aii.cr' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${roboto.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
