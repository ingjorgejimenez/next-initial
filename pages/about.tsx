import { DarkLayout } from '@/components/layouts/DarkLayout'
import { MainLayout } from '@/components/layouts/MainLayout'
import React, { ReactElement } from 'react'

export default function AboutPage() {
  return (
    <>
      <h1 className='title'>Mi pagina de About</h1>
      <div className='description'>
        <p>
          Get started by editing&nbsp;
          <code className='code'>pages/index.tsx</code>
          <span>Jorge Jimenez Software Developer </span>
        </p>
      </div>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
