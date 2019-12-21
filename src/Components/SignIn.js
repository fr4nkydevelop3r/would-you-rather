import React from 'react';
import { connect } from 'react-redux';
import { handleGetUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import '../App.css';


import Select from 'react-select';


class SignIn extends React.Component {
    state = {
        selectedOption : null,  
        userID: '',
        textWarning : ''
    }

    getUsers = () => {
        this.props.handleGetUsers();
    }

    handleChangeSelect = selectedOption => {
        this.setState({
            selectedOption,
            textWarning: ''
        })
    }

    handleSubmit = () => {
        const { location } = this.props;
        const { selectedOption } = this.state;
        this.props.setAuthedUser(selectedOption.id);
        if(location.pathname === '/signin'){
            this.props.history.push('/');
        } else {
            this.props.history.push(location.pathname);
        }
    }

    handleSignIn = (e) => {
        e.preventDefault();
        const {selectedOption} = this.state;
        if(selectedOption){
            this.handleSubmit();
        } else{
            this.setState(({
                textWarning: 'Please select user'
            }));
        }
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
                { options.length > 0 ?
                     <div className='signin-container'>

                     <h4 className='welcome-message'>Would you Rather app!</h4>
                   <span>Have fun!</span>  <span role='img' aria-label='lol'> 😎</span>
                     
                     <div className='select-users-container'>
                        
                     {
                         
                     options.length > 0 &&
                         <form>
                            <Select 
                                value={selectedOption}
                                onChange={this.handleChangeSelect}
                                options={options} 
                                placeholder='Select User'
                                theme={theme => ({
                                 ...theme,
                                 borderRadius: 0,
                                 colors: {
                                   ...theme.colors,
                                   primary25: 'primary75',
                                   primary: 'hotpink',
                                 },
                               })}   
     
     
                            /> 
                            <div className='text-warning'>
                               {this.state.textWarning}
                            </div>
                            <button 
                             className='signin-btn'
                             onClick={this.handleSignIn}
                            >Sign In</button>
       
                        </form> 
                     
     
                      }
     
       
                     </div>
                    
                     
                 </div>  :

                    <div className='loader-signin'>
                    <Loader
                        type="Puff"
                        color="#ffc0cb"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                    </div>

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
    



export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));