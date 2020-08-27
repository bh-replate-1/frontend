import React, { useEffect, useState} from 'react';
import { Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'
import replatelogo from '../replatelogo.png'

import { Details } from '../Utils/styles'

const StyledHeader = styled.header`

    
    div{
        display: flex;
        justify-content:center;
align-items:center;
        /* justify-content: space-between; */
    }
    h1{
        font-size: 7rem;
        padding-bottom: 1%;
        padding-top: 1%;
    }
    span{
        color: #ff5e00;
    }
`

const ImageBorder = styled.img`
border-left:2px solid white;
border-right:2px solid white;
`

const StyledButton = styled.button`
/* color:#ff5e00; */
color: white;
font-family: 'Heebo', sans-serif;
background-color:#ff5e00;
border:2px solid white;
padding:10px;
margin:10px auto;
width:100px;
`

const StyledLink = styled.div`
color: white;
font-family: 'Heebo', sans-serif;
background-color:#ff5e00;
text-align:center;
border:2px solid white;
padding:10px;
margin:10px auto;
width:100px;
`

const StyledFull = styled.div`
    display: flex;
    justify-content:center;
align-items:center;
    height: 35%;
    margin: 1% 5% 1% 5%;
    color:ivory;

    div {
        height: 100%;
        width: 25%;
    }
    a {
        display:flex;
        align-items:center;
        text-align:center;
        justify-content:center;
        text-decoration: none;
        background-color: #ff5e00; 
        color: ivory;
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
        <div>
             <Details>
             {/* <StyledButton onClick={() => logoutUser()}>Home</StyledButton> */}
             <StyledLink><a href='https://youthful-heyrovsky-5fcc57.netlify.app/'>Home</a></StyledLink>
             <ImageBorder src={replatelogo}></ImageBorder>
             <StyledButton onClick={() => logoutUser()}>Logout</StyledButton>
             </Details>
   
        <StyledHeader>
            <div>
            <h1>Replate <span>Your </span>Food</h1>
            </div>
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
                     
                </div>
                {/* <Link onClick={() => logout()}>Logout</Link> */}
                </StyledFull>
            
           
        </StyledHeader>
        </div>
    )
}


