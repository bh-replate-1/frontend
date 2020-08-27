import React from 'react'
import axiosWithAuth from '../Utils/axiosWithAuth'
import { StyledButton, StyledInput, CenterDiv } from '../Utils/styles'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color:white;
    width:30%;
    /* border:3px #ff5e00 solid; */
    padding:10px;


`
const PickupCard = (props) =>{
    const {item, setPickups, refresh} = props

    
    const markComplete = e =>{
        
        const flip = item.completed
        console.log(item.completed)
        e.preventDefault()
        const updatedItem ={
            id: item.id,
            food_item: item.food_item,
            quantity: item.quantity,
            use_by_date: item.use_by_date,
            refrigerate: item.refrigerate,
            completed: !flip,
            user_id: item.user_id,
        }
        axiosWithAuth()
        .put(`/api/food/${item.id}`, updatedItem)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) => console.log(err))
        refresh()
    }

    const removeItem = e =>{
        const updatedItem ={
            id: item.id,
            food_item: item.food_item,
            quantity: item.quantity,
            use_by_date: item.use_by_date,
            refrigerate: item.refrigerate,
            completed: item.completed,
            user_id: null,
        }
        axiosWithAuth()
        .put(`/api/food/${item.id}`, updatedItem)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) => console.log(err))
        refresh()
    }
    return(
        <StyledDiv className='pickup-card'>
            <p>test</p>
            <p>Food Item: {item.food_item}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Expiration: {item.use_by_date}</p>

            <div>{item.refrigerate ? (<p>Refridgeration Required</p>) : null}</div>
            <div>
            { item.completed ? 
            (<StyledButton onClick={markComplete}>completed</StyledButton>) : (<StyledButton onClick={markComplete}>Active</StyledButton>)}
            </div>
            <StyledButton onClick={removeItem}>remove</StyledButton>
        </StyledDiv>
       
    )
}

export default PickupCard