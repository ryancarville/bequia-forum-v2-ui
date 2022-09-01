import React, {FC} from 'react'
import Box from '../../src/components/atoms/Box'

import PageLayout from '../../src/components/layouts/PageLayout'
import MainContent from '../../src/components/layouts/WithSidebar/MainContent'

const NewPosts: FC = () => {
  return (
    <PageLayout
      pageTitle={'Bequia Forum: NewPosts Page'}
      pageDescription={'Bequia Forum is a place to connect and share.'}
      pageUrl={'https://www.bequiaforum.com/'}
    >
      <MainContent>
        <Box>New Posts</Box>
      </MainContent>
    </PageLayout>
  )
}
export default NewPosts;