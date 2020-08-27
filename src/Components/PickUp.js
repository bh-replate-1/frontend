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
import styled from 'styled-components'


const blankPickUp = {
    food_item: '',
    use_by_date: '',
    quantity: 0,
    refrigerate: true,
    completed: false
}

const StyledDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    text-align:center;
    background-color:white;
    width:100%;
    border:3px #ff5e00 solid;
    min-height: 200px;
    margin-bottom: 2%;

`
const StyledOuterDiv = styled.div`
    display:flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* justify-content:space-between; */
    align-items:center;
    /* text-align:center; */
    background-color:white;
    width:40%;
    /* border:3px #ff5e00 solid; */

`
const StyledInnerDiv = styled.div`
    display:flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    text-align:center;
    background-color:white;
    width:100%;
    border:3px #ff5e00 solid;
    min-height: 200px;
    margin-bottom: 2%;

`
const TestDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    /* align-items:center; */
    text-align:center;
    background-color:white;
    width:100%;
    /* border:3px #ff5e00 solid; */
    min-height: 200px;

`

const initialUsers = ''
const PickUp = (props) => {

    const [company, setCompany] = useState(initialUsers)
    const [newPickup, setPickup] = useState(blankPickUp)
    const [editing, setEditing] = useState(false)
    const [update, setUpdate] = useState(false)

    // const [filteredFoods, setFilteredFoods] = useState(props.pickup.filter(item => item.user_id === null))
    
    //state and function to force component refresh when event is triggered by buttons etc
    // const [refreshState, setRefreshState] = useState(true)
    // function refresh(){
    //     setRefreshState(!refreshState)
    // }
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
        console.log(props.pickup, 'michael 3')
        axiosWithAuth()
        .get(`/api/users/18`)
        .then(res => {
            console.log(res.data, "this is the list")
            console.log(res.data.company, 'this is company data')
            // setCompany(...company, res.data.company)
            
        })
        console.log('new michael', props.pickup)
        // setFilteredFoods(props.pickup.filter(item => item.user_id === null))
        // console.log('Michael', filteredFoods)
    },[props.refresh]) //refreshState

    console.log(company, 'this is after it all')
    // console.log(props.food, 'props.food')

    return (
        <StyledOuterDiv>
            <CenterDiv><h2>PickUp's</h2></CenterDiv>

            <StyledDiv>
                {console.log(props.pickup[0])}
                <div>{props.isLoading ? (<h3>Loading PickUps. . .</h3>) : null}</div>
                <div>{props.error ? (<h3>Error! {props.error}</h3>) : null}</div>

                {/* <div>{props.pickup && props.pickup.filter(item => item.user_id === null).map((item) => {
                    return <div>
                        
                    <PickUpDisplay food={item} update={update} setUpdate={setUpdate} updatePickup={props.updatePickup} refresh={refresh}/>
                    </div>
                })}
                </div> */}
                <div>{props.pickup && props.pickup.map((item) => {
                    return <TestDiv>
                        
                    <PickUpDisplay food={item} update={update} setUpdate={setUpdate} updatePickup={props.updatePickup}/>
                    </TestDiv>
                })}
                </div>
            </StyledDiv>

            <AddPickUp update={update} setUpdate={setUpdate}  />


            <StyledInnerDiv>
                    <h2>This company uses and trusts Replate everyday!</h2>
                    <h2>{company}</h2>
            </StyledInnerDiv>

        </StyledOuterDiv>
    )
}

const mapStateToProps = (state) => {

    // console.log(state, 'state in mapfunction in PickUp.js')
    return {
        pickup: state.pickup,
        isLoading: state.isLoading,
        error: state.error,
        refresh: state.refresh
    }
}

export default connect(mapStateToProps, { fetchPickup, updatePickup })(PickUp);