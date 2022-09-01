import React, { useState } from 'react'
import { AuthContext } from '../src/shared/context/Auth.context'
import '../styles/globals.css'


const App = ({ Component, pageProps }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <AuthContext.Provider value={{isLoggedIn, setLogin}}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default App;
