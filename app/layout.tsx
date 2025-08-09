import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '幸道家 横浜家系ラーメン',
  description: '横浜家系ラーメン幸道家 - 伝統の家系ラーメンを心を込めてお届け',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Yuji+Mai&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
