import {UPDATE_REFRESH, FETCHING_PROFILE_START, FETCHING_PROFILE_SUCCESS, FETCHING_PROFILE_ERROR, FETCHING_PICKUP_START, FETCHING_PICKUP_SUCCESS, FETCHING_PICKUP_ERROR, ADDING_PROFILE, UPDATE_PROFILE, ADDING_PICKUP, UPDATE_PICKUP} from '../actions/replateActions'

/* check to make sure data is array or object */

const initialState = {
    users: {},
    pickup: [],
    error: '',
    isLoading: false,
    refresh: false,
}

const replateReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_PROFILE_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading:false,
                users: action.payload
            }
        case FETCHING_PROFILE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADDING_PROFILE:
            return {
                ...state,
                users: action.payload
            }
        case UPDATE_PROFILE:
            return {
                ...state,
                users: action.payload
            }
        case FETCHING_PICKUP_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_PICKUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pickup: action.payload
            }
        case FETCHING_PICKUP_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADDING_PICKUP:
            console.log(state.pickup, 'state.pickup in addpickup')
            return {
                ...state,
                pickup: [...state.pickup, action.payload]
            }
        case UPDATE_PICKUP:
            return {
                ...state,
                pickup: [...state.pickup, action.payload]
            }
        case UPDATE_REFRESH:
            return{
                ...state,
                refresh: !action.payload
            }
        default: 
            return state
    }

}

export default replateReducer;