import '../styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    console.log(metric)
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <main className={`${inter.variable} font-sans`}><Component {...pageProps} /></main>
}