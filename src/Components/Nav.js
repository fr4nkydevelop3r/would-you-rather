import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav ({dispatch, history, user}) {

  const handleLogout = () => {
    dispatch({type:'USER_LOGOUT'});
    //history.push('/signin');
  }
  
  return (


    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/create' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            LeaderBoard
          </NavLink>
        </li>
        {user && 
        <li> <div>Hello  {user.name}</div>
          <NavLink to='/signin' activeClassName='active' onClick={handleLogout} >
            Logout
          </NavLink>
        </li>}
        
      </ul>
    </nav>
  )
} 




function mapStateToProps({users, authedUser}){

  const user = users[authedUser];

  return {
    authedUser,
    user
  }
}





export default withRouter(connect(mapStateToProps, null)(Nav));