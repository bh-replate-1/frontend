import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPickup, updatePickup } from '../Store/actions'
import axiosWithAuth from '../Utils/axiosWithAuth'
import { StyledButton, StyledInput, CenterDiv, FormStyle } from '../Utils/styles'
import PickUpDisplay from '../Components/PickUpDisplay'

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

   

    useEffect(() => {
        props.fetchPickup()
        console.log('in useEffect')
        axiosWithAuth()

        .get(`/api/users/3`)
        .then(res => {
           setCompany(...company, res.data.company)
        })
            },[])

    console.log(company, 'this is after it all')
    console.log(props.food, 'props.food')

    return (
        <div>
            <CenterDiv><h2>PickUp's</h2></CenterDiv>

            <CenterDiv>
                <div>{props.isLoading ? (<h3>Loading PickUps. . .</h3>) : null}</div>
                <div>{props.error ? (<h3>Error! {props.error}</h3>) : null}</div>
                <div>{props.food && props.food.map((item) => {
                    return <div>
                        
        <PickUpDisplay food={item} update={update} setUpdate={setUpdate} updatePickup={props.updatePickup} />
                    </div>
                })}
                </div>
            </CenterDiv>


            <div>
                <div>
                    <AddPickUp update={update} setUpdate={setUpdate} />
                    </div>
            </div>

            <CenterDiv>
                <div>
                    <h2>This company uses and trusts Replate everyday!</h2>
                    <h2>{company}</h2>
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

export default connect(mapStateToProps, { fetchPickup, updatePickup })(PickUp);