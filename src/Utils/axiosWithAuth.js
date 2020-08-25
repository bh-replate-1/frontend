import axios from 'axios'

const axiosWithAuth = () => {

    const token = localStorage.getItem('token')

    return axios.create({

        baseURL: 'https://bh-replate-1.herokuapp.com', // updated base url - H
        headers: {
            Authorization: `${token}`
        }
    })
}

export default axiosWithAuth;