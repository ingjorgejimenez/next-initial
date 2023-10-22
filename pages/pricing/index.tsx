import { MainLayout } from '@/components/layouts/MainLayout'
import { ReactElement } from 'react'

export default function index() {
  return (
    <>
      <h1 className='title'>Mi pagina de pricing</h1>
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

index.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
