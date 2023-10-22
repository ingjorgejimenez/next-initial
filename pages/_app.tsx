import '@/styles/globals.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

export type NexPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NexPageWithLayout
}
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // return <Component {...pageProps} />
  const getLayout = Component.getLayout ?? (page => page)
  return getLayout(<Component {...pageProps} />)
}
