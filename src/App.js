import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import formSchemaIn from './formSchemaIn'
import formSchemaUp from './formSchemaUp'
import axios from 'axios'

import * as yup from 'yup' //rewrote import error was breaking app.

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

const initialSignInFormValues = {
    username: '',
    password: '',
}

const initialSignUpFormValues = {
    username: '',
    phoneNumber: '',
    password: '',

}

const initialSignInErrors = {
    username: '',
    password: '',
}

const intitialSignUpErrors = {
    username: '',
    phoneNumber: '',
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


    const postNewSignIn = newSignIn => {
        axios
            .post("https://reqres.in/api/users", newSignIn)
            .then((res) => {
                setSignInForm([res.data, ...signInForm])
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setFormValuesIn(initialSignInFormValues)
            })
    }

    const postNewSignUp = newSignUp => {
        axios.post("https://reqres.in/api/users", newSignUp)
            .then((res) => {
                setSignUPForm([res.data, ...signUpForm])
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
            username: formValuesIn.username,
            password: formValuesIn.password
        }
        postNewSignIn(newSignIn)
    }

    const submitUp = () => {
        const newSignUp = {
            username: formValuesUp.username.trim(),
            phoneNumber: formValuesUp.phoneNumber.trim(),
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
            {/* changed to route until we have endpoints */}
                <Route exact path='/user' component={Profile}/> 
                <PrivateRoute exact path='/private/pickup'>
                    <PickUp/>
                    <SelectedPickups/>
                </PrivateRoute>
                <PrivateRoute exact path='/private/edit' component={EditPickUp}/>
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