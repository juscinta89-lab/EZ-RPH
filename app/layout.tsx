import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister'

export const metadata: Metadata = {
  title: 'e-RPH AI',
  description: 'RPH Pintar. PdP Lebih Terancang.',
  manifest: '/manifest.json'
}

export const viewport: Viewport = {
  themeColor: '#eef5ff'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ms"><body><ServiceWorkerRegister />{children}</body></html>
}
