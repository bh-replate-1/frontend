import React, { useEffect, useState} from 'react';
import { Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
    div{
        display: flex;
        /* justify-content: space-between; */
    }
    h1{
        font-size: 8rem;
        padding-bottom: 2%;
        padding-top: 2%;
    }
    span{
        color: deepskyblue;
    }
`
const StyledFull = styled.div`
    display: flex;
    justify-content: space-between;
    height: 35%;
    margin: 1% 5% 1% 5%;

    div {
        height: 100%;
        width: 25%;
    }
    a {
        text-decoration: none;
        background-color: rgba(	0, 191, 255, .9); 
        color: #333333;
        padding: 2px 6px 2px 6px;
        border-top: 1px solid #CCCCCC;
        border-right: 1px solid #333333;
        border-bottom: 1px solid #333333;
        border-left: 1px solid #CCCCCC;
        font-size: 3rem;
        width: 15%;
    }
    div a{
        /* font-size: 3rem; */
        width: 100%;
        margin: 0 2% 0 2%;
    }

    @media(max-width: 1000px){
        justify-content: center;
       
        div{
            width: 66%;
        }
        a{
            width: 33%
        }


       
    }
    
   
`

export default function Header(props){

// const {logout} = props

const history = useHistory()
const [change, setChange] = useState(true)
const [currentURL, setCurrentURL] = useState('history.location.pathname')

function refresh(){
    setCurrentURL(history.location.pathname)
}
const logoutUser = () => {
    localStorage.clear();
    history.push('/signin');
  }
useEffect(() => {
    refresh()
  },)
 


    return(
        <StyledHeader>
            <h1>Replate<span>Your</span>Food</h1>
            <StyledFull>
                <div className='nav-links' onClick={refresh}>
                    {/* <Link to="/">Home</Link> */}
                    {/* <Link to="/signin">Sign In</Link> */}
                    {
                        currentURL === '/' && 
                        <Link to='/signup'>Sign Up</Link>
                    }
                    {
                        currentURL === '/private/pickup' && 
                        // <Link to='/private/user'>User Profile</Link>
                        <Link to='/private/user'>User Profile</Link>
                    }  
                    {
                        currentURL === '/signin' && 
                        // <Link  to='/register'>Register</Link> 
                        <Link  to='/signup'>Sign Up</Link>
                    }
                    {
                        currentURL === '/private/user' &&
                        // <Link  to='/'>Plant Dashboard</Link>
                        <Link  to='/private/pickup'>Pickup Board</Link>
                    }
                    {
                        currentURL === '/signup' &&
                        // <Link to ='/signin'>Sign In</Link>
                        <Link to ='/signin'>Sign In</Link>
                    }
                     <button onClick={() => logoutUser()}>Logout</button>
                </div>
                {/* <Link onClick={() => logout()}>Logout</Link> */}

            </StyledFull>
           
        </StyledHeader>
        
    )
}


