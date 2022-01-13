import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppLink from '../../components/AppLink';
import RegisterForm from '../../components/session26/form-fields/RegisterForm';

const inputValues = {
  name: '',
  email: '',
  password: ''
}

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmission = (values, { setSubmitting }) => {
    dispatch({ type: 'base/register', payload: values })
    .then(() => {
      navigate('/redux/movies')
      alert("Successfully logged in!")
    })
    .catch(e => alert(e))
    .finally(() => setSubmitting(false))
  }

  return (
    <>
      <h3>Sign-up</h3>
      <RegisterForm submitHandler={handleSubmission} inputValues={inputValues} />
      <AppLink type="internal" name="Already have an account?" to="/redux/register" />
    </>
  )
}

export default Register
