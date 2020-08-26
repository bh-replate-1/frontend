import React from 'react'

const PickupCard = (props) =>{
    const {pickupData, setPickups, allPickups} = props

    
    const markComplete = e =>{
        e.preventDefault()
        setPickups(allPickups.map(pickup=> pickup.id === pickupData.id ? {...pickup, completed: !pickup.completed} : pickup))
    }
    return(
        <div className='pickup-card'>
            <p>{pickupData.company}</p>
            <p>{pickupData.food.item}</p>
            <p>{pickupData.food.quantity}</p>
            <p>{pickupData.food.use_by_data}</p>
            <p>{pickupData.company}</p>
            <button onClick={markComplete}>Toggle Completed</button>
        </div>
       
    )
}

export default PickupCard