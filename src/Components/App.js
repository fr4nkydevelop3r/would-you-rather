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





class App extends React.Component {

  componentDidMount(){
    const authedUser = 'sarahedo';
    this.props.handleInitialData(authedUser);
  }

  render(){

  return (
    <div className="App">
      <Switch>
      <Route 
        exact path="/" 
      >
        <Home />
      </Route>

        <Route exact path='/poll/:id'>
          <PollItem/>
        </Route>
        <Route exact path='/create'>
          <CreatePoll />
        </Route>
      </Switch>
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

export default connect(null,mapDispatchToProps)(App);
