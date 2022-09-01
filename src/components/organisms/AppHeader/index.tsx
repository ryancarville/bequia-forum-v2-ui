import React, { FC } from 'react'
import Box from '../../atoms/Box'
import NavMenu from '../../molecules/NavMenu'
import { IAppHeader } from './appHeader.types'
import styles from '../../../../styles/AppHeader.module.css'
import Link from 'next/link'
import Image from 'next/image'

const AppHeader: FC<IAppHeader> = () => {
  return (
    <Box className={styles.appHeaderWrapper}>
      <Link href={'/'}>
        <Image
          src={'https://bequia-forum-ryancarville.vercel.app/images/nav/bequia-logo.png'}
          alt={'bequia forum logo'}
          width={'50em'}
          height={'30em'}
        />
      </Link>
      <NavMenu/>
    </Box>
  )
}
export default AppHeader;