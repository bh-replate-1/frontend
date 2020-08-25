import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import formSchemaIn from './formSchemaIn'
import formSchemaUp from './formSchemaUp'
import { BrowserRouter as Router } from 'react-router-dom'

import * as yup from 'yup'

import PrivateRoute from './Components/PrivateRoute'
import Profile from './Components/Profile'
import PickUp from './Components/PickUp'
import EditPickUp from './Components/EditPickUp'
import SelectedPickups from './Components/SelectedPickups'

import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
// import Home from './Home'
import Header from './Components/Header'


import './App.css';
import axiosWithAuth from './Utils/axiosWithAuth';
import PickupCard from './Components/PickupCard';

const initialSignInFormValues = {
    email: '',
    password: '',
}

const initialSignUpFormValues = {
    email: '',
    phone: '',
    password: '',

}

const initialSignInErrors = {
    email: '',
    password: '',
}

const intitialSignUpErrors = {
    email: '',
    phone: '',
    password: '',
}

const initialSignIn = []
const initialSignUp = []
const initialDisabled = true



const App = () => {
    const [signInForm, setSignInForm] = useState(initialSignIn)
    const [signUpForm, setSignUPForm] = useState(initialSignUp)

    const [formValuesIn, setFormValuesIn] = useState(initialSignInFormValues)
    const [formValuesUp, setFormValuesUp] = useState(initialSignUpFormValues)

    const [formErrorsIn, setFormErrorsIn] = useState(initialSignInErrors)
    const [formErrorsUp, setFormErrorsUp] = useState(intitialSignUpErrors)

    const [disabledIn, SetDisabledIn] = useState(initialDisabled)
    const [disabledUp, SetDisabledUp] = useState(initialDisabled)

    const history = useHistory()

    const postNewSignIn = newSignIn => {
        axiosWithAuth()
            .post('/api/auth/login', newSignIn)
            .then((res) => {
                console.log(res.data.token)
                console.log('test')
                localStorage.setItem('token', res.data.token)
                setSignInForm(initialSignUp)
                history.push('/private/pickup')
                
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setFormValuesIn(initialSignInFormValues)
            })
    }

    const postNewSignUp = newSignUp => {
        axiosWithAuth().post('/api/auth/register', newSignUp)
            .then((res) => {
                console.log(res.data.token)
                setSignUPForm(res.data)
                localStorage.setItem('token', res.data.token)
                history.push('/signin')
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setFormErrorsUp(initialSignUpFormValues)
            })
    }

    const inputChangeIn = (name, value) => {
        yup
            .reach(formSchemaIn, name)
            .validate(value)
            .then((valid) => {
                setFormErrorsIn({
                    ...formErrorsIn,
                    [name]: " ",
                })
            })
            .catch((err) => {
                setFormErrorsIn({
                    ...formErrorsIn,
                    [name]: err.errors[0],
                })
            })
        setFormValuesIn({
            ...formValuesIn,
            [name]: value,
        })
    }




    const inputChangeUp = (name, value) => {
        yup
            .reach(formSchemaUp, name)
            .validate(value)
            .then((valid) => {
                setFormErrorsUp({
                    ...formErrorsUp,
                    [name]: " ",
                })
            })
            .catch((err) => {
                setFormErrorsUp({
                    ...formErrorsUp,
                    [name]: err.errors[0],
                })
            })
        setFormValuesUp({
            ...formValuesUp,
            [name]: value,
        })

    }

    const submitIn = () => {
        const newSignIn = {
            email: formValuesIn.email,
            password: formValuesIn.password
        }
        postNewSignIn(newSignIn)
    }

    const submitUp = () => {
        const newSignUp = {
            email: formValuesUp.email.trim(),
            phone: formValuesUp.phone.trim(),
            password: formValuesUp.password,
        }
        postNewSignUp(newSignUp)
    }

    useEffect(() => {
        formSchemaIn.isValid(formValuesIn).then((valid) =>
            SetDisabledIn(!valid))
    }, [formValuesIn])

    useEffect(() => {
        formSchemaUp.isValid(formValuesUp).then((valid) => {
            SetDisabledUp(!valid)
        })
    }, [formValuesUp])


    return (
        <div>
            <Header />
            <Switch>
                {/* changed to route until we have endpoints/ must also change path back to /private/user*/}
                <PrivateRoute exact path='/private/user' component={Profile} />
                <PrivateRoute exact path='/private/pickup'>
                    <PickUp />
                    {/* <SelectedPickups /> */}
                </PrivateRoute>
                <PrivateRoute exact path='/private/edit' component={EditPickUp} />
                <Route path='/signin'>
                    <SignIn
                        valuesIn={formValuesIn}
                        errorsIn={formErrorsIn}
                        inputChangeIn={inputChangeIn}
                        submitIn={submitIn}
                        disabled={disabledIn}
                    />
                </Route>
                <Route path='/signup'>
                    <SignUp
                        valuesUp={formValuesUp}
                        errorsUp={formErrorsUp}
                        inputChangeUp={inputChangeUp}
                        submitUp={submitUp}
                        disabled={disabledUp}
                    />
                </Route>
                {/* <Route path='/'>
                    <Home />
                </Route> */}
            </Switch>
        </div>

    )
}

export default App