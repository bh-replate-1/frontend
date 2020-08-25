import React from 'react'
import { Container, Form, Button,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import './forms.css'


function SignIn(props) {

  const { valuesIn,
          errorsIn,
          inputChangeIn,
          submitIn,
          disabled} = props

  const onSubmit = (evt) => {
    debugger
    evt.preventDefault();
    submitIn()
  }
  const onInputChange = (evt) => {
    const {name, value} = evt.target
    inputChangeIn(name, value)
  }
  return (
        <>
        <Container>
          <Form className="signin-form">
       
                <Form.Group>
                       <h2>SIGN IN</h2>
                    <div>{errorsIn.email}</div>
                    <div>{errorsIn.password}</div>
                  <Form.Label>E-Mail:</Form.Label>
                       <br/>
                    <Form.Control
                        type="input"
                        value={valuesIn.email}
                        name="email"
                        placeholder="email"
                        onChange={onInputChange}
                    ></Form.Control>
                </Form.Group>
              
                        <br/>
               
                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                        <br/>
                    <Form.Control
                        type="input"
                        value={valuesIn.password}
                        name="password"
                        placeholder="password"
                        onChange={onInputChange}
                    ></Form.Control>
                </Form.Group>
                        <br/>
              <Button onSubmit={onSubmit} disabled={disabled} variant="primary" type="submit">Log In</Button>
                        <br/>
              <Link to="/signup">Need an account?</Link>

            </Form>
          </Container>
        </>
  );
}

export default SignIn
