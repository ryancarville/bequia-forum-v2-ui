import React, {FC} from 'react'
import Box from '../../src/components/atoms/Box'

import PageLayout from '../../src/components/layouts/PageLayout'
import MainContent from '../../src/components/layouts/WithSidebar/MainContent'

const Jobs: FC = () => {
  return (
    <PageLayout
      pageTitle={'Bequia Forum: Jobs Page'}
      pageDescription={'Bequia Forum is a place to connect and share.'}
      pageUrl={'https://www.bequiaforum.com/'}
    >
      <MainContent>
        <Box>Jobs</Box>
      </MainContent>
    </PageLayout>
  )
}
export default Jobs;