import React from 'react';
import {
  Switch,
  Route,
  
} from  'react-router-dom';
import Home from './Home';
import PollItem from './PollItem';
import CreatePoll from './CreatePoll';

import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import  LeaderBoard    from './LeaderBoard'
import Nav from './Nav';
import SigIn from './SignIn';



class App extends React.Component {

  componentDidMount(){
    const {authedUser} = this.props;
    this.props.handleInitialData(authedUser);
  }

  render(){

    const { authedUser } = this.props;



  return (
 

    <div className="App">

    {
      authedUser && 

        <div>
          <Nav />

          <Switch>
  
            <Route exact path="/"> <Home />
            </Route>

            <Route exact path='/poll/:id'>
              <PollItem/>
            </Route>
            
            <Route exact path='/create'>
              <CreatePoll />
            </Route>

            <Route exact path='/leaderboard'>
              <LeaderBoard />
            </Route>

            <Route exact path='/signin'>
              <SigIn />
            </Route>

          </Switch>

        </div>

      
    }

    </div>
  );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    handleInitialData : (id) => {
      dispatch(handleInitialData(id))
    }
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
