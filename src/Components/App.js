import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import PollItem from "./PollItem";
import CreatePoll from "./CreatePoll";
import LeaderBoard from "./LeaderBoard";
import SigIn from "./SignIn";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          :
          <Route exact path="/signin">
            <SigIn />
          </Route>
          <Route exact path="/questions/:id">
            <PollItem />
          </Route>
          <Route exact path="/add">
            <CreatePoll />
          </Route>
          <Route exact path="/leaderboard">
            <LeaderBoard />
          </Route>
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default App;
