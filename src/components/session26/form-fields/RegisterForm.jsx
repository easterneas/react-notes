import { Formik } from 'formik';
import { Button, Col, Form } from 'react-bootstrap';
import * as yup from 'yup';

import TextField from '../../shared/forms/TextField';

const formSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required()
})

const RegisterForm = (props) => {
  const { submitHandler, inputValues } = props

  return (
    <Formik
      initialValues={ inputValues }
      validationSchema={ formSchema }
      onSubmit={ submitHandler }
    >
      {({ handleSubmit, values, errors, isValid, isSubmitting }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Col>
            <TextField as={Col} sm="4" controlId="name" label="Name" type="text" name="name" />
          </Col>
          <Col>
            <TextField as={Col} sm="4" controlId="email" label="Email" type="text" name="email" />
          </Col>
          <Col>
            <TextField as={Col} sm="4" controlId="password" label="Password" type="password" name="password" />
          </Col>

          <Button variant="primary" type="submit" disabled={isSubmitting} >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
