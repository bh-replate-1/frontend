import React from 'react'
import {Link} from 'react-router-dom'
// import './forms.css'

function Home() {
    return (
        <div className="homepage">
            <Link to='/signin'>Sign In</Link>
            <br/>
            <Link to='/signup'>Sign up</Link>
        </div>
    )
}

export default Home