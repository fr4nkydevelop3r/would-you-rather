import React from 'react';
import { connect } from 'react-redux';
import { handleGetUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom';

import Select from 'react-select';

class SignIn extends React.Component {

    state = {
        selectedOption : null,  
        userID: ''
    }

    getUsers = () => {
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
        this.props.history.push('/');
    }


    render(){


        const {users} = this.props;
        let options = [];


        if(Object.keys(users).length > 0){
            const usersArr = Object.values(users);
            options = usersArr.map((user) => (
            {
                id: user.id,
                value: user.name,
                label: user.name,
                avatar: user.avatarURL
            }
        ))

        } else{
            this.getUsers();
        }

        


        

        const { selectedOption,  } = this.state;   
        
        

        return(


            <div>

                <h4>Sign in</h4>
                
                <div>
                   
                {
                    
                options.length > 0 &&
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
                

                 }

  
                </div>
               
                
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
    



export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));