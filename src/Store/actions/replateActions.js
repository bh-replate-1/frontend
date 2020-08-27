import axiosWithAuth from '../../Utils/axiosWithAuth'

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

// login action


/*profile actions*/
export const fetchProfile = (id) => (dispatch) => {
    dispatch({type: FETCHING_PROFILE_START})
    axiosWithAuth()
    .get(`/api/users/${id}`)
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
    .post('/api/users/', value)
    .then (res => {
        console.log (res, 'res in add profile')
        dispatch({type: ADDING_PROFILE, payload: res.data})
    })
    .catch (error => {
        console.log(error, 'error in add profile')
    })
}

export const updateProfile = (id, changes) => (dispatch) => {
    debugger
    dispatch({type: UPDATE_PROFILE})
    axiosWithAuth()
    .put(`/api/users/${id}`, changes )
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
    .get('/api/food/')
    .then( res => {
        console.log(res, 'res in fetchPickup')
        // const food = res.data.foodItems
        dispatch({type: FETCHING_PICKUP_SUCCESS, payload: res.data[0].foodItems})
    })
    .catch( error => {
        console.log(error, 'this is the error')
    })
}

export const addPickup = (value) => (dispatch) => {
    axiosWithAuth()
    .post('/api/food/', value)
    .then (res => {
        console.log (res, 'res in add Pickup')
        dispatch({type: ADDING_PICKUP, payload: res.data})
    })
    .catch (error => {
        console.log(error, 'error in add Pickup')
    })
}

export const updatePickup = (changes, id) => (dispatch) => {
    dispatch({type: UPDATE_PICKUP})
    axiosWithAuth()
    .put(`/api/food/${id}`, changes )
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


