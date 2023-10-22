import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
  text: string
  href: string
}
export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter()
  return (
    <>
      <Link
        className={`menu__link ${asPath === href ? 'active' : ''}`}
        href={href}
      >
        {text}
      </Link>
    </>
  )
}
