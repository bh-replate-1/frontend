import React from 'react'
import { Container, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './forms.css'

function SignUp(props) {

    const {valuesUp, errorsUp, inputChangeUp, submitUp, disabledUp} = props

    const onSubmit = (evt) => {
        evt.preventDefualt()
        submitUp()
    }

    const onInputChange = (evt) => {
        const {name, value} = evt.target
        inputChangeUp(name, value)
    }
    return (
        <>
    <Container>
         <Form className='signup-form'>
            <Form.Group>
                    <h2 className='text-center'>SIGN UP</h2>
                    <div>{errorsUp.username}</div>
                    <div>{errorsUp.phoneNumber}</div>
                    <div>{errorsUp.password}</div>
            <Form.Label>Username:</Form.Label>
                    <br/>
                <Form.Control
                    type="input"
                    value={valuesUp.username}
                    name="username"
                    placeholder="username"
                    onChange={onInputChange}
                />
            </Form.Group>
                    <br/>
            <Form.Group>
            <Form.Label>Phone Number:</Form.Label>
                    <br/>
                <Form.Control
                type="number"
                value={valuesUp.phoneNumber}
                placeholder="15556781234"
                name="phoneNumber"
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

            <Button onSubmit={onSubmit} disabled={disabledUp} type="submit">Submit</Button>
                <br/>
            <Link to='/signin'>Already have an acccount?</Link>
        </Form>
    </Container>
        </>
    )
}

export default SignUp