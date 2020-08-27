import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPickup, updatePickup } from '../Store/actions'
import { StyledButton, StyledInput, CenterDiv } from '../Utils/styles'
import PickupCard from './PickupCard'
import axiosWithAuth from '../Utils/axiosWithAuth'
import styled from 'styled-components'
import { Link, useHistory} from 'react-router-dom'

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

const StyledDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    /* align-items:center; */
    text-align:center;
    background-color:white;
    width:100%;
    border:3px #ff5e00 solid;
    min-height: 200px;

`

const SelectedPickups = (props) => {

    const userId = localStorage.getItem('id')
    
    return (

        <StyledOuterDiv>

            <CenterDiv><h2>Your Pickups</h2></CenterDiv>

            <StyledDiv>
                {
                    props.pickup.filter(item => item.user_id == userId).map(item =>
                        <PickupCard item={item}/>
                    )
                }
            </StyledDiv>
        </StyledOuterDiv>

    )

}

const mapStateToProps = (state) => {

return {
    pickup: state.pickup,
    isLoading: state.isLoading,
    error: state.error
}
}
export default connect(mapStateToProps, {fetchPickup})(SelectedPickups);



// const [refreshState, setRefreshState] = useState(true)
    // const [myPickups, setMyPickups] = useState([])

//     function refresh(){
//         setRefreshState(!refreshState)
// }


// useEffect(() => {
    //     props.fetchPickup()
    //     /* setMyPickups(props.pickup.filter(item => item.user_id == userId)) */
    //     console.log(props.pickup)
    //     axiosWithAuth()
    //         .get('/api/food/')
    //         .then((res) => {
    //              console.log(userId)
    //             setMyPickups(res.data.foodItems.filter(item => item.user_id == userId))
    //         })
    // },[refreshState])
