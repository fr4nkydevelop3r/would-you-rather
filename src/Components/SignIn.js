import React from 'react';
import { connect } from 'react-redux';
import { handleGetUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

import Select from 'react-select';
import App from '../Components/App';

class SigIn extends React.Component {

    state = {
        selectedOption : null,
        goHome : false
    }

    componentDidMount(){
        this.props.handleGetUsers();
    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { selectedOption } = this.state;
        this.props.setAuthedUser(selectedOption.id);
        this.setState(({
            goHome: true
        }))

    }


    render(){


        const {users, authedUser} = this.props;
        const usersArr = Object.values(users);
        const options = usersArr.map((user) => (
            {
                id: user.id,
                value: user.name,
                label: user.name,
                avatar: user.avatarURL
            }
        ))

        const { selectedOption, goHome } = this.state;


        


        return(
            <div>
                <h4>Sign in</h4>

                {
                    authedUser && goHome ?
                        <App />

                        : <div>
                           { Object.keys(users).length > 0 &&
                        
                        <form onSubmit={(e) => {
                            this.handleSubmit(e)
                        }}>
                            <Select 
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options} 
                            /> 
                            <button>SignIn</button>

                        </form>
                            } </div>
                            
                              
                    

                }
            </div>


                
                    
                

        )
    }
}


function mapStateToProps({users, authedUser}){
    return {
        users,
        authedUser
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetUsers : function(){
            dispatch(handleGetUsers());
        },
        setAuthedUser : function(id){
            dispatch(setAuthedUser(id))
        }
    }
}
    



export default  connect(mapStateToProps, mapDispatchToProps)(SigIn);