import React from 'react'
import PageLayout from '../../src/components/layouts/PageLayout'
import MainContent from '../../src/components/layouts/WithSidebar/MainContent'
import LoginForm from '../../src/components/organisms/LoginForm'
import { AuthContext } from '../../src/shared/context/Auth.context'

const Login = () => {
  return (
    <PageLayout
      pageTitle={'Log in to your account'}
      pageDescription={'Log in to your forum account'}
      pageUrl={'/login'}
    >
      <MainContent>
        <AuthContext.Consumer>
          {({ isLoggedIn, setLogin }) =>
            isLoggedIn ? null : <LoginForm setLogin={setLogin} />
          }
        </AuthContext.Consumer>
      </MainContent>
    </PageLayout>
  );
};
export default Login;