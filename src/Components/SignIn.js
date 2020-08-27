import React, {useRef, useEffect} from 'react'
import { Container, Form, Button,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {StyledButton, CenterDiv} from '../Utils/styles'
import {TweenMax, Power3} from 'gsap'



function SignIn(props) {
  let signinForm = useRef(null)

  useEffect(() => {
    TweenMax.to(
      signinForm,
      .8,
      {
        opacity: 1,
        y: -30,
        ease: Power3.easeOut
      }
    )
  
  }, [])

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
        <CenterDiv>
        <Container>
          <Form className="signin-form" onSubmit={onSubmit} ref={el => {signinForm = el}}>
       
                <Form.Group>
                       <h2>SIGN IN</h2>
                    <div><h3>{errorsIn.email}</h3></div>
                    <div><h3>{errorsIn.password}</h3></div>
                  <Form.Label>E-Mail:</Form.Label>
                       <br/>
                    <Form.Control className="signin-email"
                        type="input"
                        value={valuesIn.email}
                        name="email"
                        placeholder="email"
                        onChange={onInputChange}
                   />
                </Form.Group>
              
                        <br/>
               
                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                        <br/>
                    <Form.Control className="signin-password"
                        type="password"
                        value={valuesIn.password}
                        name="password"
                        placeholder="password"
                        onChange={onInputChange}
                    />
                </Form.Group>
                        <br/>
              <StyledButton className="submitBtn" disabled={disabled} variant="primary" type="submit">Log In</StyledButton>
                        <br/>
              <Link className="signup-link" to="/signup">Need an account?</Link>

            </Form>
          </Container>
          </CenterDiv>
        </>
  );
}

export default SignIn
