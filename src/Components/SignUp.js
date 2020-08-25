import React from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import './forms.css'

function SignUp(props) {

    const {valuesUp, errorsUp, inputChangeUp, submitUp, disabledUp} = props

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
    <Container>
         <Form className='signup-form' onSubmit={onSubmit}>
            <Form.Group>
                    <h2 className='text-center'>SIGN UP</h2>
                    <div>{errorsUp.email}</div>
                    <div>{errorsUp.phone}</div>
                    <div>{errorsUp.password}</div>
            <Form.Label>email:</Form.Label>
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
                type="number"
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

            <Button disabled={disabledUp} type="submit">Submit</Button>
                <br/>
            <Link to='/signin'>Already have an acccount?</Link>
        </Form>
    </Container>
        </>
    )
}

export default SignUp