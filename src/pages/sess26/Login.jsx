import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppLink from '../../components/AppLink';
import LoginForm from '../../components/session26/form-fields/LoginForm';

const inputValues = {
  email: '',
  password: ''
}

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmission = (values, { setSubmitting }) => {
    dispatch({ type: 'base/login', payload: values })
    .then(() => {
      navigate('/redux/movies')
      alert("Successfully logged in!")
    })
    .catch(e => alert(e))
    .finally(() => setSubmitting(false))
  }

  return (
    <>
      <h3>Login</h3>
      <LoginForm submitHandler={ handleSubmission } inputValues={ inputValues } />
      <AppLink type="internal" name="Don't have an account?" to="/redux/register" />
    </>
  )
}
