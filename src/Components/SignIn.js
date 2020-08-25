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
              <StyledButton  disabled={disabled} variant="primary" type="submit">Log In</StyledButton>
                        <br/>
              <Link to="/signup">Need an account?</Link>

            </Form>
          </Container>
          </CenterDiv>
        </>
  );
}

export default SignIn
