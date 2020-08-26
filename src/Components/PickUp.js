import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPickup } from '../Store/actions'
import axiosWithAuth from '../Utils/axiosWithAuth'
import { StyledButton, StyledInput, CenterDiv, FormStyle } from '../Utils/styles'

import EditPickUp from './EditPickUp'
import AddPickUp from './AddPickUp'
import { useHistory } from "react-router-dom";
import {useParams} from 'react-router-dom'


const blankPickUp = {
    food_item: '',
    use_by_date: '',
    quantity: 0,
    refrigerate: true,
    completed: false
}


const initialUsers = ''
const PickUp = (props) => {

    const [company, setCompany] = useState(initialUsers)
    const [newPickup, setPickup] = useState(blankPickUp)
    const [editing, setEditing] = useState(false)
    const [update, setUpdate] = useState(false)

    const history = useHistory()

    const onChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setPickup({
            ...newPickup,
            [event.target.name]: value
        })
    }

    //PUT /api/food/:id

    const saveEdit = e => {
        e.preventDefault();
        console.log(props.food, 'newpick dot id')
        axiosWithAuth()
        .put(`/api/food/${newPickup.id}`, newPickup)
        .then(res => {
            console.log(res, 'res in edit pickup')
          setUpdate(!update)
        })
        .catch(error => {
            console.log(error, 'this is the error')
        })
      };


    useEffect(() => {
        props.fetchPickup()
        console.log('in useEffect')
        axiosWithAuth()

        .get(`/api/users/18`)
        .then(res => {
            console.log(res.data, "this is the list")
            console.log(res.data.company, 'this is company data')
            setCompany(...company, res.data.company)
            
        })
        

    }, [])
    console.log(company, 'this is after it all')
    console.log(props.food, 'props.food')

    return (
        <div>
            <CenterDiv><h2>PickUp's</h2></CenterDiv>

            <CenterDiv>
                <div>{props.isLoading ? (<h3>Loading PickUps. . .</h3>) : null}</div>
                <div>{props.error ? (<h3>Error! {props.error}</h3>) : null}</div>
                <div>{props.food[0] && props.food[0].foodItems.map((item) => {
                    return <div>
                        <h3>Pick Up:</h3>
                        <div>
                            <p>Food Item: {item.food_item}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Expiration: {item.use_by_date}</p>
                            <p>Item Id:{item.id}</p>
                        </div>
                        <div>{item.refrigerate ? (<p>Refridgeration Required</p>) : null}</div>
                        <div>{item.completed ? (<p>Available</p>) : null}</div>
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
                </div>)}

                        
                    </div>
                })}
                </div>
            </CenterDiv>


            <div>
                <div>
                    <AddPickUp />
                    </div>

                {/* <div>
                <EditPickUp />
                </div> */}
                
            </div>

            <CenterDiv>
                <div>
                    <h2>This company uses and trusts Replate everyday!</h2>
                    <p>{company}, is amazing!</p>
                </div>
            </CenterDiv>

        </div>
    )
}

const mapStateToProps = (state) => {

    console.log(state, 'state in mapfunction in PickUp.js')
    return {
        food: state.pickup,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchPickup })(PickUp);