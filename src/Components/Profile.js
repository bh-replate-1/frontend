import React, { useState, useEffect, useContext, createContext } from 'react'
import { fetchProfile, updateProfile } from '../Store/actions/replateActions'
import { connect } from 'react-redux'
import { StyledButton, StyledInput, } from '../Utils/styles'
import styled from 'styled-components'
import axiosWithAuth from '../Utils/axiosWithAuth'

const StyledForm = styled.form`
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media(max-width: 1600px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const StyledDiv = styled.div`
   display:flex;
/* justify-content:center; */
/* align-items:center; */
background-color:mistyrose;
width:30%;
margin:20px auto;
border:3px crimson solid;
padding:10px;

    @media(max-width: 800px){
        width: 75%;
    }
`
const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;

    @media(max-width: 800px){
        width: 75%;
    }
`
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;

    
`
const StyledInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;


`



const Profile = (props) => {
    const id = localStorage.getItem('id')
    const ProfileData = {
        id: props.users.id,
        name: props.users.name,
        email: props.users.email,
        company: props.users.company,
        address: props.users.address,
        phone: props.users.phone,
    }
    const profileData = props.users

    const [userForm, setUserForm] = useState(ProfileData)
    /* const [form, setForm] = useState('') */
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        console.log(id)
        props.fetchProfile(id)
    }, [])

    const inputChange = e => {
        const { name, value } = e.target;

        setUserForm({
            ...userForm,
            [name]: value
        })

    }

    const disableChange = e => {
        e.preventDefault()
        setDisabled(!disabled)
    }
    const submit = e => {
        e.preventDefault()
        // props.updateProfile(id, userForm)

        axiosWithAuth()
            .put(`/api/users/${id}`, userForm)
            .then(res => {
                console.log(res, 'res in update profile')
                // dispatch({ type: UPDATE_PROFILE, payload: res.data })
            })
            .catch(error => {
                console.log(error, 'this is the error')
            })

    }
    return (
        <StyledDiv>
            <StyledForm type='submit'>
                <StyledInputs>
                    <StyledLabel>Name:
                    <StyledInput
                            // id=''
                            name='name'
                            type='text'
                            placeholder={props.users.name}
                            onChange={inputChange}
                            value={userForm.name}
                            disabled={disabled}
                        />
                    </StyledLabel>
                    <StyledLabel>email:
                    <StyledInput
                            // id=''
                            name='email'
                            type='email'
                            onChange={inputChange}
                            placeholder={props.users.email}
                            value={props.users.email}
                            disabled={disabled}
                        />
                    </StyledLabel>
                    <StyledLabel>Business Name:
                    <StyledInput
                            name='company'
                            type='text'
                            onChange={inputChange}
                            placeholder={props.users.company}
                            value={userForm.company}
                            disabled={disabled}
                        />
                    </StyledLabel>
                    <StyledLabel>Address:
                    <StyledInput
                            // id=''
                            name='address'
                            type='text'
                            onChange={inputChange}
                            placeholder={props.users.address}
                            value={userForm.address}
                            disabled={disabled}
                        />
                    </StyledLabel>
                    <StyledLabel>Phone Number:
                    <StyledInput
                            // id=''
                            name='phone'
                            type='text'
                            onChange={inputChange}
                            placeholder={props.users.phone}
                            value={userForm.phone}
                            disabled={disabled}
                        />
                    </StyledLabel>
                </StyledInputs>
                <ButtonDiv>
                    <StyledButton onClick={disableChange}>Edit</StyledButton>
                    <StyledButton onClick={submit} >Submit</StyledButton>
                </ButtonDiv>

            </StyledForm>
        </StyledDiv>
    )
}
const mapStateToProps = (state) => {

    return {
        users: state.users,
    }
}

const mapDispatchToProps = {
    fetchProfile,
    updateProfile,
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
