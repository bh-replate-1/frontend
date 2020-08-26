import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPickup, addPickup } from '../Store/actions'
import axiosWithAuth from '../Utils/axiosWithAuth'

const blankPickUp = {
    food_item: '',
    use_by_date: '',
	quantity: 0,
	refrigerate: true,
	completed: false
}


// "id": 2,
// "food_item": "Lasagna",
// "quantity": 1,
// "use_by_date": "8/30/20",
// "refrigerate": null,
// "completed": null,
// "user_id": 1


const initialUsers = []
const PickUp = (props) => {
 

    const [users, setUsers] = useState(initialUsers)
    const [newPickUp, setPickUp] = useState(blankPickUp)

    const onChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setPickUp({
            ...newPickUp,
            [event.target.name]: value
        })
    }
    

    const onSubmit = (event) => {
        event.preventDefault()
        props.addPickup(newPickUp)
    }

    useEffect(() => {
        props.fetchPickup()
        console.log('in useEffect')
        axiosWithAuth()
        .get('/api/users')
        .then(res => {
            console.log(res.data.users[0].company, 'this is user data')
            setUsers(res.data.users[0].company)
            
        })

    }, [])

    return (
        <div>
            {/* PickUp Page
            <div>{props.isLoading ? (<h3>Loading PickUps. . .</h3>) : null}</div>
            <div>{props.error ? (<h3>Error! {props.error}</h3>) : null}</div>
            <div>{props.pickup.map((item) => {
                return <div>
                    <h3>Pick Up:</h3>
                    <p>Food Item: {props.food.food_item}</p>
                    <p>Quantity: {props.food.quantity}</p>
                    <p>Expiration: {props.food.use_by_date}</p>
                    <div>{props.food.refrigerate ? (<p>Refridgeration Required</p>) : null}</div>
                    <div>{props.food.completed ? (<p>Available</p>) : null}</div>
                </div>
            })}
            </div>

            <div>
                Add a PickUp
                <form onSubmit={onSubmit}>
                    <div>Food Item:
                        <input
                        type="text"
                        name="food_item"
                        value={newPickUp.food_item}
                        onChange={onChange}
                        />
                    </div>
                    <div>Quantity:
                        <input
                        type="text"
                        name="quantity"
                        value={newPickUp.quantity}
                        onChange={onChange}
                        />
                    </div>
                    <div>Use by Date:
                        <input
                        type="text"
                        name="use_by_date"
                        value={newPickUp.use_by_date}
                        onChange={onChange}
                        />
                    </div>
                    <div>Refrigerate:
                        <input
                        type="checkbox"
                        name="refrigerate"
                        value={newPickUp.refrigerate}
                        onChange={onChange}
                        />
                    </div>

                    <div>
                        <button type='submit'>Submit PickUp</button>
                    </div>
                </form>
            </div> */}
              
        <div>
            <h2>This company uses and trusts Replate everyday!</h2>
            <p>{users}</p>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    console.log(state, 'state in mapfunction in PickUp.js')
    return {
        pickup: state.pickup,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchPickup, addPickup })(PickUp);