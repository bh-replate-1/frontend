import React, {useState, useRef, useEffect} from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {StyledButton, CenterDiv} from '../Utils/styles'
import {TweenMax, Power3} from 'gsap'



function SignUp(props) {
    
    let signUpForm = useRef(null)

    useEffect(() => {
      TweenMax.to(
        signUpForm,
        .8,
        {
          opacity: 1,
          y: -30,
          ease: Power3.easeOut
        },
   
      )
    
    }, [])

    const {valuesUp, 
           errorsUp, 
           inputChangeUp, 
           submitUp, 
           disabledUp} = props

    const onSubmit = (evt) => {
        evt.preventDefault()
        submitUp()
    }

    const onInputChange = (evt) => {
        const {name, value} = evt.target
        inputChangeUp(name, value)
    }
    return (
        <>
        <CenterDiv>
        <Container>
         <Form className='signup-form' onSubmit={onSubmit} ref={el => {signUpForm = el}}>
            <Form.Group>
                    <h2 className='text-center'>SIGN UP</h2>
                    <div><h3>{errorsUp.email}</h3></div>
                    <div><h3>{errorsUp.phone}</h3></div>
                    <div><h3>{errorsUp.password}</h3></div>
            <Form.Label>Email:</Form.Label>
                    <br/>
                <Form.Control
                    type="input"
                    value={valuesUp.email}
                    name="email"
                    placeholder="email"
                    onChange={onInputChange}
                />
            </Form.Group>
                    <br/>
            <Form.Group>
            <Form.Label>Phone Number:</Form.Label>
                    <br/>
                <Form.Control
                type="text"
                value={valuesUp.phone}
                placeholder="15556781234"
                name="phone"
                onChange={onInputChange}
                />
            </Form.Group>
                    <br/>
            <Form.Group>
            <Form.Label>Password:</Form.Label>
                    <br/>
                <Form.Control
                type="password"
                value={valuesUp.password}
                placeholder="password"
                name="password"
                onChange={onInputChange}
                />
                <br/>
           
            
            </Form.Group>
                <br/>

            <StyledButton className="submitBtn" disabled={disabledUp} type="submit">Submit</StyledButton>
                <br/>
            <Link to='/signin'>Already have an acccount?</Link>
        </Form>
    </Container>
    </CenterDiv>
   
        </>
    )
}

export default SignUp