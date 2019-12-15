import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogout } from '../actions/index';

function Nav ({unsetAuthedUser, history}) {

  const handleLogOut = (e) => {
    e.preventDefault();
    //history.push('signin');
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
        <li>
          <NavLink to='/signin' activeClassName='active' onClick={handleLogOut} >
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
} 









export default withRouter(connect(null, null)(Nav));