import React from 'react'
import Box from '../../src/components/atoms/Box'
import PageLayout from '../../src/components/layouts/PageLayout'
import MainContent from '../../src/components/layouts/WithSidebar/MainContent'
import RegisterForm from '../../src/components/organisms/RegisterForm'

const Signup = () => {
  return (
    <PageLayout
      pageTitle={'Sign Up Toady!'}
      pageDescription={'Create a new forum account'}
      pageUrl={'/signup'}
    >
      <MainContent>
        <Box>Signup</Box>
        <RegisterForm />

      </MainContent>
    </PageLayout>
  )
}
export default Signup;