import React, { useState } from 'react'
import styles from './registrationForm.module.css'
import RegistrationServices from '../../../services/registration/registration.service'
import useRegistrationModel, { RegistrationFormModelInputs } from '@Shared/forms/models/useRegistration.model'
import useForm from '@Hooks/forms/useForm'
import { IRegistrationFormData } from './registrationForm.types'
import { ValidationError } from '@Shared/types/forms/validations.types'
import Router from 'next/router'
const today = new Date();

// get max date value for date of birth picker
// age must be over 18 years old
const getMinBirthDate = (): string => {
  const minBirthDate = new Date(today.getTime())
  minBirthDate.setDate(today.getDate() - 6570);
  return minBirthDate.toISOString().split('T')[0];
}

/**
 * @name Registration Form - Parent Component
 * @description encapsulates all elements and logic from the useForm hooks suite
 * @returns form elements
 */
const RegisterForm = () => {
  const RegistrationFormModel = useRegistrationModel();
  const [errorMsg, setErrorMsg] = useState<ValidationError>();

  // registration form input objects
  const formInputs = RegistrationFormModel.getInputs();

  // useForm Hook
  const {
    inputsState,
    setInput,
    mapInputs,
    validateInputs
  } = useForm<
    RegistrationFormModelInputs,
    IRegistrationFormData
  >(formInputs);

  // if element is checkbox we need to use the 'checked' attribute
  const handleChange = (e: any) => {
    let { name, value, checked, type } = e.target;
    if (type === 'checkbox') value = checked;
    setInput({name, value});
  }

  // form submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { isValid, error } = validateInputs(inputsState);

    if(isValid) {
      if (!!errorMsg) setErrorMsg(undefined);
      const registrationFormService = new RegistrationServices();
      const mappedInputs: IRegistrationFormData = mapInputs();
      const result = await registrationFormService.createNewUser(mappedInputs);
      console.log(result);
      if (result.code === 201) {
        Router.push('/login')
      }
      else {
        setErrorMsg({name: 'serverErr', message: result.message});
      }
    } else {
      setErrorMsg(error);
    }
  }

  const {
    givenName,
    familyName,
    username,
    email,
    password,
    dob,
    phoneNumber,
    profilePhoto,
    tosAccepted
  } = inputsState;

  return (
    <form className={styles.regFormWrapper} onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        type={'text'}
        name={givenName.name}
        value={givenName.value}
        placeholder={'Given Name'}
        onChange={handleChange}
      />
      {errorMsg?.name === givenName.name && <span>{errorMsg.message}</span>}
      <input
        className={styles.formInput}
        type={'text'}
        name={familyName.name}
        value={familyName.value}
        placeholder={'Family Name'}
        onChange={handleChange}
      />
      {errorMsg?.name === familyName.name && <span>{errorMsg.message}</span>}
      <input
        className={styles.formInput}
        type={'date'}
        name={dob.name}
        max={getMinBirthDate()}
        value={dob.value}
        placeholder={'Date of Birth'}
        onChange={handleChange}
      />
      {errorMsg?.name === dob.name && <span>{errorMsg.message}</span>}
      <input
        className={styles.formInput}
        type={'text'}
        name={username.name}
        value={username.value}
        placeholder={'Username'}
        onChange={handleChange}
      />
      {errorMsg?.name === username.name && <span>{errorMsg.message}</span>}
      <input
        className={styles.formInput}
        type={'email'}
        name={email.name}
        value={email.value}
        placeholder={'Email'}
        onChange={handleChange}
      />
      {errorMsg?.name === email.name && <span>{errorMsg.message}</span>}
      <input
        className={styles.formInput}
        type={'password'}
        name={password.name}
        value={password.value}
        placeholder={'Password'}
        onChange={handleChange}
      />
      {errorMsg?.name === password.name && <span>{errorMsg.message}</span>}
      <input
        className={styles.formInput}
        type={'string'}
        name={phoneNumber.name}
        value={phoneNumber.value}
        placeholder={'Phone Number'}
        onChange={handleChange}
      />
      {errorMsg?.name === phoneNumber.name && <span>{errorMsg.message}</span>}
      <span className={styles.labelGroup}>
        <label htmlFor={'profilePhoto'}>Upload a profile photo</label>
        <input
          className={styles.formInput}
          type={'file'}
          name={profilePhoto.name}
          value={profilePhoto.value?.url}
          onChange={handleChange}
        />
        {errorMsg?.name === profilePhoto.name && (
          <span>{errorMsg.message}</span>
        )}
      </span>
      <span className={styles.labelGroup}>
        <input
          className={styles.formInput}
          type={'checkbox'}
          name={tosAccepted.name}
          checked={tosAccepted.value}
          onChange={handleChange}
          defaultChecked={false}
        />
        <label htmlFor={'acceptTos'}>Accept Terms of Service</label>
        {errorMsg?.name === tosAccepted.name && <span>{errorMsg.message}</span>}
      </span>
      <button type={'submit'}>Register</button>
      {errorMsg?.name === 'serverErr' && <span>{errorMsg.message}</span>}
    </form>
  );
}
export default RegisterForm;