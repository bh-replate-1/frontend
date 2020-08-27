import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPickup, updatePickup } from '../Store/actions/replateActions'
import { StyledButton, StyledInput, CenterDiv } from '../Utils/styles'
import PickupCard from './PickupCard'
import axiosWithAuth from '../Utils/axiosWithAuth'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    /* justify-content:center; */
    /* align-items:center; */
    text-align:center;
    background-color:white;
    width:30%;
    border:3px #ff5e00 solid;
    button{
        width: 50%;
    }
`

const SelectedPickups = (props) => {
    const id = localStorage.getItem('id')
    const [myPickups, setMyPickups] = useState([])


    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/food/`)
        .then((res) =>{
            // console.log(res.data.foodItems)
            setMyPickups(res.data.foodItems.filter(item => item.user_id === null))// need to actually search for an id
            // console.log(myPickups)
        }, [])
    })
 
    return (

        <StyledDiv>
            

            {
                myPickups.map(item =>
                    <PickupCard item={item}/>
                )
            }
        </StyledDiv>

    )
}


export default SelectedPickups;