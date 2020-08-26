import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPickup, addPickup } from '../Store/actions'
import axiosWithAuth from '../Utils/axiosWithAuth'
import { StyledButton, StyledInput, CenterDiv, FormStyle } from '../Utils/styles'

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
        console.log('in useEffect')
        axiosWithAuth()
        .get('/api/users')
        .then(res => {
            console.log(res.data.users, "this is the list")
            // console.log(res.data.users[0].company, 'this is company data')
            setCompany(res.data.users[0].company)
            // console.log(company, 'this is after it all')
            
        })

    }, [])
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
                    </div>
                    <div>{item.refrigerate ? (<p>Refridgeration Required</p>) : null}</div>
                    <div>{item.completed ? (<p>Available</p>) : null}</div>
                </div>
            })}
            </div>
            </CenterDiv>

            <CenterDiv>
            <div>
                <h3>Add a PickUp</h3>
                <form onSubmit={onSubmit}>
                    <div><FormStyle>Food Item:</FormStyle>
                        <StyledInput
                        type="text"
                        name="food_item"
                        value={newPickUp.food_item}
                        onChange={onChange}
                        />
                    </div>
                    <div><FormStyle>Quantity:</FormStyle>
                        <StyledInput
                        type="text"
                        name="quantity"
                        value={newPickUp.quantity}
                        onChange={onChange}
                        />
                    </div>
                    <div><FormStyle>Use by Date:</FormStyle>
                        <StyledInput
                        type="text"
                        name="use_by_date"
                        value={newPickUp.use_by_date}
                        onChange={onChange}
                        />
                    </div>
                    <div><FormStyle>Refrigerate:</FormStyle>
                        <StyledInput
                        type="checkbox"
                        name="refrigerate"
                        value={newPickUp.refrigerate}
                        onChange={onChange}
                        />
                    </div>

                    <div>
                        <StyledButton type='submit'>Add PickUp</StyledButton>
                    </div>
                </form>

            </div> 
            </CenterDiv>

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

export default connect(mapStateToProps, { fetchPickup, addPickup })(PickUp);