import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
// import { updatePickup } from '../store/actions' changed import as this one was erroring out. -H
import {updatePickup} from '../Store/actions/replateActions'
=======
import { updatePickup } from '../Store/actions'
>>>>>>> 8d32269b4a01b049e50b133a36d48dd669322b00
import {useParams} from 'react-router-dom'
import axiosWithAuth from '../Utils/axiosWithAuth'

const blankPickUp = {
    name:'',
    company:'',
	quantity: '',
    use_by_date: '',
    food_item: '',
	refrigerate: true,
	completed: false
}

const EditPickUp = (props) => {
    const [newPickup, setPickup] = useState(blankPickUp)
    const {id} = useParams()

    useEffect(() => {
        axiosWithAuth()
          .get(`https://bh-replate-1.herokuapp.com/api/food/${id}`)
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
        props.updatePickup(newPickup)
    }

    return(
        <div>
            Edit your PickUp
            <form onSubmit={onSubmit}>
            <div>Name:
                        <input
                        type="text"
                        name="name"
                        value={newPickup.name}
                        onChange={onChange}
                        />
                    </div>
                    <div>Company:
                        <input
                        type="text"
                        name="company"
                        value={newPickup.company}
                        onChange={onChange}
                        />
                    </div>
                    <div>Food Item:
                        <input
                        type="text"
                        name="food_item"
                        value={newPickup.food_item}
                        onChange={onChange}
                        />
                    </div>
                    <div>Quantity:
                        <input
                        type="text"
                        name="quantity"
                        value={newPickup.quantity}
                        onChange={onChange}
                        />
                    </div>
                    <div>Use by Date:
                        <input
                        type="text"
                        name="use_by_date"
                        value={newPickup.use_by_date}
                        onChange={onChange}
                        />
                    </div>
                    <div>Refrigerate:
                        <input
                        type="checkbox"
                        name="refrigerate"
                        value={newPickup.refrigerate}
                        onChange={onChange}
                        />
                    </div>

                    <div>
                        <button type='submit'>Update PickUp</button>
                    </div>
                </form>
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