import React, { useState, useEffect } from 'react'
import { fetchProfile, updateProfile } from '../Store/actions/replateActions'
import { connect } from 'react-redux'
import { StyledButton, StyledInput, } from '../Utils/styles'
import styled from 'styled-components'
//will need to change these to props

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
    flex-direction: column

    
`
const StyledInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;


`
const mockProfileData = {
    email: 'hernandezm.dev@gmail.com',
    business: 'Mikes food',
    address: '123 happy street',
    phone: '6096099696',
}
const Profile = (props) => {
    const [form, setForm] = useState(mockProfileData)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        fetchProfile()
    }, [setForm])

    const inputChange = e => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })

    }

    const disableChange = e => {
        e.preventDefault()
        setDisabled(!disabled)
    }
    const submit = e => {
        e.preventDefault()
        updateProfile(form)
    }
    return (
        <StyledDiv>
            <StyledForm onClick={submit} type='submit'>
            <StyledInputs>
                <StyledLabel>email:
                    <StyledInput
                        // id=''
                        name='email'
                        type='email'
                        onChange={inputChange}
                        value={form.email}
                        disabled={disabled}
                    />
                </StyledLabel>
                <StyledLabel>Business Name:
                    <StyledInput
                        // id=''
                        name='business'
                        type='text'
                        onChange={inputChange}
                        value={form.business}
                        disabled={disabled}
                    />
                </StyledLabel>
                <StyledLabel>Address:
                    <StyledInput
                        // id=''
                        name='address'
                        type='text'
                        onChange={inputChange}
                        value={form.address}
                        disabled={disabled}
                    />
                </StyledLabel>
                <StyledLabel>Phone Number:
                    <StyledInput
                        // id=''
                        name='phone'
                        type='text'
                        onChange={inputChange}
                        value={form.phone}
                        disabled={disabled}
                    />
                </StyledLabel>
                </StyledInputs>
                <ButtonDiv>
                    <StyledButton onClick={disableChange}>Edit</StyledButton>
                    <StyledButton>Submit</StyledButton>
                </ButtonDiv>
               
            </StyledForm>
        </StyledDiv>
    )
}
//disabled the state import until we have the proper data
// const mapStateToProps = (state) => {
//     return {
//         profile: {
//             email: state.profile.email,
//             business: state.profile.business,
//             address: state.profile.address,
//             phone: state.profile.phone,
//         }
//     }
// }

// export default connect(mapStateToProps, { updateProfile },{ fetchProfile })(Profile);
export default (Profile)