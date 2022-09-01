import React, {FC} from 'react'
import Welcome from '../src/components/atoms/Welcome'

import PageLayout from '../src/components/layouts/PageLayout'
import MainContent from '../src/components/layouts/WithSidebar/MainContent'

const Home: FC = () => {
  return (
    <PageLayout
      pageTitle={'Bequia Forum: Home Page'}
      pageDescription={'Bequia Forum is a place to connect and share.'}
      pageUrl={'https://www.bequiaforum.com/'}
    >
      <MainContent>
        <Welcome />
      </MainContent>
    </PageLayout>
  )
}
export default Home;