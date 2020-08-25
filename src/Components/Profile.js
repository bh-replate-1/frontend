import React, { useState, useEffect } from 'react'
import { fetchProfile, updateProfile } from '../Store/actions/replateActions'
import { connect } from 'react-redux'

//will need to change these to props
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
        <div>
            <form onClick={submit} type='submit'>
                <label>email:
                    <input
                        // id=''
                        name='email'
                        type='email'
                        onChange={inputChange}
                        value={form.email}
                        disabled={disabled}
                    />
                </label>
                <label>Business Name:
                    <input
                        // id=''
                        name='business'
                        type='text'
                        onChange={inputChange}
                        value={form.business}
                        disabled={disabled}
                    />
                </label>
                <label>Address:
                    <input
                        // id=''
                        name='address'
                        type='text'
                        onChange={inputChange}
                        value={form.address}
                        disabled={disabled}
                    />
                </label>
                <label>Phone Number:
                    <input
                        // id=''
                        name='phone'
                        type='text'
                        onChange={inputChange}
                        value={form.phone}
                        disabled={disabled}
                    />
                </label>
                <button onClick={disableChange}>Edit</button>
                <button>Submit</button>
            </form>
        </div>
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
export default(Profile)