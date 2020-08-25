import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPickup, updatePickup } from '../Store/actions/replateActions'
import PickupCard from './PickupCard'

const SelectedPickups = (props) => {
    const filteredPickups = props.pickup.filter(pickup => pickup.id === props.profile.id) // need to figure out how to grab userId from token
    const [pickups, setPickups] = useState(filteredPickups)


    useEffect(()=>{
        pickups.forEach(pickup =>{
            updatePickup(pickup)
        })
        fetchPickup()
    },[setPickups])

    return (
        <div>
            <h3>Your Pickups</h3>
            {
                pickups.map(pickup => <PickupCard allPickups={pickups} pickupData={pickup} setPickups={setPickups}/>)
            }
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        profile: {
            id: state.profile.id
        },
        pickup: state.pickup


    }
}
export default connect(mapStateToProps, { fetchPickup },{updatePickup})(SelectedPickups);