import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "아몬드 - 브랜드 맞춤 콘텐츠 솔루션",
  description: "GPT + 구글 트렌드 기반 가장 트렌디한 콘텐츠를 만드는 솔루션",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

