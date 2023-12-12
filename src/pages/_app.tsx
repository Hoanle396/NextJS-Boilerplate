import '@/styles/globals.css'
import 'antd/dist/antd'
import ThemeProvider from '@/styles/themes/ThemeProvider'
import { NextPage } from 'next'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement, ReactNode, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

const queryClientOption = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 }
  }
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const [queryClient] = useState(() => new QueryClient(queryClientOption))
  const getLayout = Component.getLayout || (page => page)

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NextThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              {getLayout(<Component {...pageProps} />)}
            </Hydrate>
          </QueryClientProvider>
        </ThemeProvider>
      </NextThemeProvider>
      <Toaster
        toastOptions={{
          position: 'bottom-right',
          success: {
            className: 'border border-green-300 !bg-background text-sm !items-baseline rounded-md'
          },
          error: {
            className: 'border border-red-300 !bg-background text-sm !items-baseline rounded-md'
          }
        }}
        containerStyle={{
          zIndex: 99999999
        }}
      />
    </>
  )
}
