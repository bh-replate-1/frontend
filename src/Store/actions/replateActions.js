import axiosWithAuth from '../../Utils/axiosWithAuth'
import axios from 'axios'

export const FETCHING_PROFILE_START = 'FETCHING_PROFILE_START'
export const FETCHING_PROFILE_SUCCESS = 'FETCHING_PROFILE_SUCCESS'
export const FETCHING_PROFILE_ERROR = 'FETCHING_PROFILE_ERROR'
export const FETCHING_PICKUP_START = 'FETCHING_PICKUP_START'
export const FETCHING_PICKUP_SUCCESS = 'FETCHING_PICKUP_SUCCESS'
export const FETCHING_PICKUP_ERROR = 'FETCHING_PICKUP_ERROR'

export const ADDING_PROFILE = 'ADDING_PROFILE'
export const ADDING_PICKUP = 'ADDING_PICKUP'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const UPDATE_PICKUP = 'UPDATE_PICKUP'

/*skipping deletes for now */

/* check to make sure we need axios or axiosWithAuth */

/*profile actions*/
export const fetchProfile = () => (dispatch) => {
    dispatch({type: FETCHING_PROFILE_START})
    axiosWithAuth()
    .get('/profile/')
    .then( res => {
        console.log(res, 'res in fetchprofile')
        dispatch({type: FETCHING_PROFILE_SUCCESS, payload: res.data})
    })
    .catch( error => {
        console.log(error, 'this is the error')
    })
}

export const addProfile = (value) => (dispatch) => {
    dispatch({type: ADDING_PROFILE})
    axiosWithAuth()
    .post('/profile/', value)
    .then (res => {
        console.log (res, 'res in add profile')
        dispatch({type: ADDING_PROFILE, payload: res.data})
    })
    .catch (error => {
        console.log(error, 'error in add profile')
    })
}

export const updateProfile = (changes) => (dispatch) => {
    dispatch({type: UPDATE_PROFILE})
    axiosWithAuth()
    .put('/profile/', changes )
    .then (res => {
        console.log(res, 'res in update profile')
        dispatch({type: UPDATE_PROFILE, payload: res.data})
    })
    .catch (error => {
        console.log(error, 'this is the error')
    })
}

/* pick ups actions */

export const fetchPickup = () => (dispatch) => {
    dispatch({type: FETCHING_PICKUP_START})
    axiosWithAuth()
    .get('/pickup/')
    .then( res => {
        console.log(res, 'res in fetchPickup')
        dispatch({type: FETCHING_PICKUP_SUCCESS, payload: res.data})
    })
    .catch( error => {
        console.log(error, 'this is the error')
    })
}

export const addPickup = (value) => (dispatch) => {
    dispatch({type: ADDING_PICKUP})
    axiosWithAuth()
    .post('/pickup/', value)
    .then (res => {
        console.log (res, 'res in add Pickup')
        dispatch({type: ADDING_PICKUP, payload: res.data})
    })
    .catch (error => {
        console.log(error, 'error in add Pickup')
    })
}

export const updatePickup = (changes) => (dispatch) => {
    dispatch({type: UPDATE_PICKUP})
    axiosWithAuth()
    .put('/pickup', changes )
    .then (res => {
        console.log(res, 'res in update Pickup')
        dispatch({type: UPDATE_PICKUP, payload: res.data})
    })
    .catch (error => {
        console.log(error, 'this is the error')
    })
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'object') {
        next(action)
    }
    else if (typeof action === 'function') {
        action(store.dispatch)
    }
}


