import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import axiosWithAuth from '../Utils/axiosWithAuth'
import {updatePickup} from '../Store/actions/'
import { StyledButton, StyledInput, CenterDiv, FormStyle } from '../Utils/styles'

const blankPickUp = {
    food_item: '',
    use_by_date: '',
    quantity: 0,
    refrigerate: true,
    completed: false
}

const EditPickUp = (props) => {
    const [newPickup, setPickup] = useState(blankPickUp)
    const id = localStorage.getItem('id')

    useEffect(() => {
        axiosWithAuth()
          .put(`/api/food/${id}}`)
          .then((res) => {
            console.log(res, 'res in edit pickup')
            setPickup(res.data);
            
          })
          .catch((err) => console.error(err));
      }, [id]);

    

    const onChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setPickup({
            ...newPickup,
            [event.target.name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        props.setUpdate(!props.update)
    }

    return(
        <div>
            <CenterDiv>
                <div>
            <h3>Edit your PickUp</h3>
            <form onSubmit={onSubmit}>
                    <div><FormStyle>Company:</FormStyle>
                        <StyledInput
                        type="text"
                        name="company"
                        value={newPickup.company}
                        onChange={onChange}
                        />
                    </div>
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
                        <StyledButton type='submit'>Update PickUp</StyledButton>
                    </div>
                </form>
                </div>
                </CenterDiv>
        </div>
    )
}

const mapStateToProps = (state) => {

    console.log(state, 'state in mapfunction in EditPickUp.js')
    return {
        pickup: state.pickup,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { updatePickup })(EditPickUp);