import React, {useState} from 'react'
import axiosWithAuth from '../Utils/axiosWithAuth'

const mockProfileData = {
    email: 'hernandezm.dev@gmail.com',
    business: 'Mikes food',
    address: '123 happy street',
    phone: '6096099696',
}
const Profile = () => {
    const [form, setForm] = useState(mockProfileData)
    const [disabled, setDisabled] = useState(true)

    const inputChange = e =>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        })

    }

    const disableChange = e =>{
        e.preventDefault()
        setDisabled(!disabled)
    }
    return(
        <div>
            <form >
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

export default Profile;