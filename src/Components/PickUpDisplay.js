import React, {useState, useEffect} from 'react';
import { StyledButton, StyledInput, CenterDiv, FormStyle } from '../Utils/styles'
import axiosWithAuth from '../Utils/axiosWithAuth'
import {useParams} from 'react-router-dom'

const blankPickUp = {
    food_item: '',
    use_by_date: '',
    quantity: 0,
    refrigerate: true,
    completed: false
}


const PickUpDisplay = (props) => {
const {food_item, quantity, use_by_date, id} = props.food
const [editing, setEditing] = useState(false)
const [newPickup, setPickup] = useState(blankPickUp)

const saveEdit = e => {
    e.preventDefault();
    props.updatePickup(newPickup, id)
    // axiosWithAuth()
    // .put(`/api/food/${id}`, newPickup)
    // .then(res => {
    //      props.setUpdate(!props.update)
    // })
    // .catch(error => {
    //     console.log(error, 'this is the error')
    // })
  };

  const onChange = (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setPickup({
        ...newPickup,
        [event.target.name]: value
    })
}

    return (
        <div>
            Test 
            <div>Food Item: {food_item}</div>
            <div>Quantity: {quantity}</div>
            <div>Use by Date: {use_by_date}</div>
            <div>Item Id: {id}</div>

            <div><StyledButton onClick={() => setEditing(true)}>Update PickUp</StyledButton></div>

                    {editing && (<div>
                <div>
            <h3>Edit your PickUp</h3>
            <form onSubmit={saveEdit}>
                    <div><FormStyle>Food Item:</FormStyle>
                        <StyledInput
                        type="text"
                        name="food_item"
                        value={newPickup.food_item}
                        onChange={onChange}
                        />
                    </div>
                    <div><FormStyle>Quantity:</FormStyle>
                        <StyledInput
                        type="text"
                        name="quantity"
                        value={newPickup.quantity}
                        onChange={onChange}
                        />
                    </div>
                    <div><FormStyle>Use by Date:</FormStyle>
                        <StyledInput
                        type="text"
                        name="use_by_date"
                        value={newPickup.use_by_date}
                        onChange={onChange}
                        />
                    </div>
                    <div><FormStyle>Refrigerate:</FormStyle>
                        <StyledInput
                        type="checkbox"
                        name="refrigerate"
                        value={newPickup.refrigerate}
                        onChange={onChange}
                        />
                    </div>

                    <div>
                        <StyledButton type='submit'>Save Changes</StyledButton>
                        <StyledButton onClick={() => setEditing(false)}>cancel</StyledButton>
                    </div>
                </form>
                </div>
                </div>
                    )}
        </div>
    )
} 


export default PickUpDisplay;