import './globals.css'
import '@/styles/variables.css'
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  )
}
