import { ActiveLink } from './ActiveLink'
import style from './Navbar.module.css'
import { menuItems } from '../router/router'

export function Navbar() {
  return (
    <header className={style.navbar}>
      <nav className='nav'>
        <ul className='menu'>
          {menuItems.map(({ text, href }) => (
            <li key={href}>
              <ActiveLink
                text={text}
                href={href}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
