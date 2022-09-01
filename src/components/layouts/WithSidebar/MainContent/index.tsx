import React from 'react'
import styles from '../../../../../styles/MainContent.module.css'

const MainContent = ({children}) => {
  return <main className={styles.mainGrid}>{children}</main>;
}
export default MainContent;