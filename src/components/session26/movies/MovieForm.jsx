import { Field, Formik } from 'formik';
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import * as yup from 'yup';

import TextField from '../../shared/forms/TextField';

const formSchema = yup.object()

const MovieForm = (props) => {
  const { submitHandler, inputValues, studios, genres } = props
  return (
    <Formik
      initialValues={ inputValues }
      validationSchema={ formSchema }
      onSubmit={ submitHandler }
    >
      {({ handleSubmit, values, errors, isValid, isSubmitting }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Col>
            <TextField as={Col} sm="4" controlId="name" label="Movie Name" type="text" name="name" />
          </Col>
          <Col>
            <TextField as={Col} sm="4" controlId="yearReleased" label="Released in" type="text" name="yearReleased" />
          </Col>
          <Col>
            <Field name="StudioId">
              {({ field, form }) => {
                const isValid = !form.errors[field.name]
                const isInvalid = form.touched[field.name] && !isValid

                return (
                  <Form.Group as={Col} controlId="StudioId">
                    <Form.Label>Studio</Form.Label>
                    <InputGroup>
                      <Form.Select
                        {...field}
                        isValid={form.touched[field.name] && isValid}
                        isInvalid={isInvalid}
                        feedback={form.errors[field.name]}
                      >
                        <option>- Select one... -</option>
                        { studios.map(studio => (<option value={studio.id}>{ studio.name }</option>)) }
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                        {form.errors[field.name]}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                )
              }}
            </Field>
          </Col>
          <Col>
            <Field name="GenreId">
              {({ field, form }) => {
                const isValid = !form.errors[field.name]
                const isInvalid = form.touched[field.name] && !isValid

                return (
                  <Form.Group as={Col} controlId="GenreId">
                    <Form.Label>Genre</Form.Label>
                    <InputGroup>
                      <Form.Select
                        {...field}
                        isValid={form.touched[field.name] && isValid}
                        isInvalid={isInvalid}
                        feedback={form.errors[field.name]}
                      >
                        <option>- Select one... -</option>
                        { genres.map(genre => (<option value={genre.id}>{ genre.name }</option>)) }
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                        {form.errors[field.name]}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                )
              }}
            </Field>
          </Col>

          <Button variant="primary" type="submit" disabled={isSubmitting} >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default MovieForm
