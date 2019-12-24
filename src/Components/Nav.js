import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import "../App.css";

class Nav extends React.Component {
  state = {
    menuOpen: false
  };

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch({ type: "USER_LOGOUT" });
    this.setState({
      menuOpen: false
    });
  };

  handleCloseMenu = () => {
    this.setState({
      menuOpen: false
    });
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  render() {
    const { user } = this.props;

    return (
      <div className="nav-container">
        <div className="welcome-user">
          {user && <div>Hello {user.name}</div>}
        </div>
        <div className="nav">
          <Menu
            right
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className="menu-item"
              onClick={this.handleCloseMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/add"
              activeClassName="active"
              className="menu-item"
              onClick={this.handleCloseMenu}
            >
              New Question
            </NavLink>
            <NavLink
              to="/leaderboard"
              activeClassName="active"
              className="menu-item"
              onClick={this.handleCloseMenu}
            >
              LeaderBoard
            </NavLink>

            {user && (
              <NavLink
                to="/signin"
                activeClassName="active"
                className="menu-item"
                onClick={this.handleLogout}
              >
                Logout
              </NavLink>
            )}
          </Menu>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser];

  return {
    authedUser,
    user
  };
}

export default withRouter(connect(mapStateToProps, null)(Nav));
