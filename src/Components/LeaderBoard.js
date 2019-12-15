import React from 'react';
import { connect } from 'react-redux';
import LeaderBoardItem from './LeaderBoardItem';

class LeaderBoard extends React.Component {
    render(){
        const {users} = this.props;
        let keysUsers = [];
        let usersArray = [];

        if(users){
             keysUsers = Object.keys(users);
             usersArray = keysUsers.map((user) => (
                 {
                     name: users[user].name,
                     questions : users[user].questions.length,
                     answers : Object.keys(users[user].answers).length,
                     score:  users[user].questions.length +  Object.keys(users[user].answers).length
                 }
             ))

             console.log(usersArray);

             usersArray.sort(function (a, b) {
                 return b.score - a.score
             });



        }  
        
        

        return(
            <div>

            {
                usersArray.map((user, index) => (
                    <LeaderBoardItem    
                        key={index}
                        score={user.score}
                        userName={user.name}
                        questions={user.questions}
                        answers={user.answers}
                        position={index+1}
                    />
                ))
            }

            </div>
        )
    } 
}


function mapStateToProps({users}){
    return{
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard);