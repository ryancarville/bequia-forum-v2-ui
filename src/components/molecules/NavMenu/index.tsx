import React, { FC } from 'react'
import { INavMenuProps } from './navMenu.types'
import styles from '../../../../styles/NavMenu.module.css'
import Link from 'next/link'

const NavMenu: FC<INavMenuProps> = (props) => {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navList}>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/forum'}>Forum</Link>
        </li>
        <li>
          <Link href={'/newPosts'}>New Posts</Link>
        </li>
        <li>
          <Link href={'/events'}>Events</Link>
        </li>
        <li>
          <Link href={'/directory'}>Directory</Link>
        </li>
        <li><Link href={'/jobs'}>Jobs</Link>
        </li>
        <li>
          <Link href={'/community'}>Community</Link>
        </li>
        <li>
          <Link href={'/advertise'}>Advertise</Link>
        </li>
        <li>
          <Link href={'/login'}>Log In</Link>
        </li>
        <li>
          <Link href={'/register'}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavMenu;