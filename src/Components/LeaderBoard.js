import React from 'react';
import { connect } from 'react-redux';
import LeaderBoardItem from './LeaderBoardItem';
import SignIn from './SignIn';

class LeaderBoard extends React.Component {
    render(){
        const {users, authedUser} = this.props;
        let keysUsers = [];
        let usersArray = [];

        if(users){
             keysUsers = Object.keys(users);
             usersArray = keysUsers.map((user) => (
                 {
                     name: users[user].name,
                     avatar: users[user].avatarURL,
                     questions : users[user].questions.length,
                     answers : Object.keys(users[user].answers).length,
                     score:  users[user].questions.length +  Object.keys(users[user].answers).length
                 }
             ))


             usersArray.sort(function (a, b) {
                 return b.score - a.score
             });


        }  

        
        return(
            <>
            {
                authedUser ? 
                <div className='leaderboard-container'>

                {usersArray.map((user, index) => (
                    
                    <LeaderBoardItem    
                        key={index}
                        score={user.score}
                        username={user.name}
                        questions={user.questions}
                        answers={user.answers}
                        position={index+1}
                        avatar={user.avatar }
                    />
                ))} </div> : <SignIn />

            }
         </>
        )
    } 
}


function mapStateToProps({users, authedUser}){
    return{
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard);