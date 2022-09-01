import React, { FC } from 'react'
import ReactHelmet from '../../../hocs/Helmet'
import AppHeader from '../../organisms/AppHeader'
import { IPageLayoutProps } from './pageLayout.types'
import styles from '../../../../styles/PageLayout.module.css'
import Box from '../../atoms/Box'

const PageLayout: FC<IPageLayoutProps> = (props) => {
  const { children, ...helmetProps} = props;
  return (
    <Box className={styles.pageLayoutWrapper}>
      <ReactHelmet {...helmetProps}/>
      <AppHeader />
      {children}
    </Box>
  )
}
export default PageLayout;