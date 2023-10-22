import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from '@/components/layouts/MainLayout.module.css'
import React from 'react'

interface Props {
  children: React.JSX.Element | React.JSX.Element[]
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Contact- Jorge</title>
        <meta
          name='description'
          content='About Page'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Navbar />
      <main className={`${styles.main} `}>{children}</main>
    </>
  )
}
