import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPickup } from '../store/actions'
import { addPickup } from '../store/actions'
import EditPickUp from './EditPickUp'

const blankPickUp = {
    name:'',
    company:'',
	quantity: '',
    use_by_date: '',
    food_item: '',
	refrigerate: true,
	completed: false
}


const PickUp = (props) => {
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
    }, [props])

    return (
        <div>
            PickUp Page
            <div>{props.isLoading ? (<h3>Loading PickUps. . .</h3>) : null}</div>
            <div>{props.error ? (<h3>Error! {props.error}</h3>) : null}</div>
            <div>{props.pickup.map((item) => {
                return <div>
                    <h3>Pick Up:</h3>
                    <p>Name: {props.name}</p>
                    <p>Company: {props.company}</p>
                    <p>Food: {props.food.food_item}</p>
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
                    <div>Name:
                        <input
                        type="text"
                        name="name"
                        value={newPickUp.name}
                        onChange={onChange}
                        />
                    </div>
                    <div>Company:
                        <input
                        type="text"
                        name="company"
                        value={newPickUp.company}
                        onChange={onChange}
                        />
                    </div>
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