import React, { FC, useState } from 'react'
import { ILoginForm, ILoginFormData } from './loginForm.types'
import styles from '../../../../styles/LoginForm.module.css'
import Box from '../../atoms/Box'
import Link from 'next/link'
import CognitionServices from '../../../services/cognito/cognito.service'
import Router from 'next/router'
import useForm from '@Hooks/forms/useForm'
import { ILoginFormInputs, useLoginModel } from '@Shared/forms/models/useLoginModel.model'
import { CognitoUserSession } from 'amazon-cognito-identity-js'
import { ValidationError } from '@Shared/types/forms/validations.types'
import { EApiResponse } from '@Shared/types/validation.types'
import useCookies from '@Hooks/cookies/useCookies.hook'

const LoginForm: FC<ILoginForm> = ({setLogin}) => {
  const [errorMsg, setErrorMsg] = useState<ValidationError>();
  const cookies = useCookies();
  const loginModel = useLoginModel();
  const formInputs = loginModel.getInputs();

  const {
    inputsState,
    setInput,
    mapInputs,
    validateInputs
  } = useForm<
    ILoginFormInputs,
    ILoginFormData
  >(formInputs);


  const handleChange = (e: any) => {
    e.preventDefault();
    const {name, value} = e.target;
    setInput({name, value});
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(inputsState)
    const {isValid, error} = validateInputs(inputsState);
    console.log(isValid)
    if (isValid) {
      try {
        const cognitoServices = new CognitionServices();
        const {email, password} = mapInputs();

        const res: CognitoUserSession = await cognitoServices.authenticate(email, password);
        console.log(res)
        if (res.isValid()) {
          cookies.setItem('authToken', res.getAccessToken().getJwtToken());
          cookies.setItem(
            'sub',
            res.getIdToken().payload.sub
          );
          setLogin(true);
          Router.push('/');
        }
      } catch(err: any) {
          setErrorMsg({name: EApiResponse.NOT_AUTHORIZED, message: err.message});
      }
    } else {
      setErrorMsg(error);
    }
  }

  const { email, password } = inputsState;

  return (
    <Box className={styles.loginFormContainer}>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} className={styles.loginFormWrapper}>
        <input
          type={'text'}
          name={email.name}
          value={email.value}
          placeholder={'Email'}
          onChange={handleChange}
          className={styles.loginFormInput}
        />
        {!!errorMsg && errorMsg.name === email.name && (
          <span>{errorMsg.message}</span>
        )}
        <input
          type={'password'}
          name={password.name}
          value={password.value}
          placeholder={'Password'}
          onChange={handleChange}
          className={styles.loginFormInput}
        />
        {!!errorMsg && errorMsg.name === password.name && (
          <span>{errorMsg.message}</span>
        )}
        {!!errorMsg && errorMsg.name === EApiResponse.NOT_AUTHORIZED && (
          <span>{errorMsg.message}</span>
        )}
        <button className={styles.loginFormSubmit} type={'submit'}>
          Login
        </button>
      </form>
      <span>
        <Link href={'/register'}>Create account?</Link>
      </span>
    </Box>
  );
}
export default LoginForm;