import React from 'react'
import { Container, Form, Button,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
<<<<<<< HEAD
// import './forms.css' commented out as this is not in our version of the app
=======
// import './forms.css'
>>>>>>> 8d32269b4a01b049e50b133a36d48dd669322b00


function SignIn(props) {

  const { valuesIn,
          errorsIn,
          inputChangeIn,
          submitIn,
          disabled} = props

  const onSubmit = (evt) => {
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
                    <div>{errorsIn.username}</div>
                    <div>{errorsIn.password}</div>
                  <Form.Label>Username:</Form.Label>
                       <br/>
                    <Form.Control
                        type="input"
                        value={valuesIn.username}
                        name="username"
                        placeholder="username"
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
