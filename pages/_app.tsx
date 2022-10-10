import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <div>
      <p className="text-5xl font-bold text-red-500 mt-6 border-8 rounded-2xl border-green-400">Siema</p>
      <Component {...pageProps} />
    </div>
  )
}