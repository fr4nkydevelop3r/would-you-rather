import React from 'react';
import '../../src/App.css';

class LeaderBoardItem extends React.Component {
    render(){

        let classPosition = this.props.position;

        if(classPosition === 1){
            classPosition = 'firstPlace';
        } else if( classPosition === 2 ){
            classPosition = 'secondPlace';
        } else if( classPosition === 3 ){
            classPosition = 'thirdPlace';
        }

        return(
            <div>
                <div>Name: {this.props.userName}</div>
                <div>Answered Questions: {this.props.answers}</div>
                <div>Created Questions: {this.props.questions}</div>
                <div className={classPosition}>Score: {this.props.score}</div>
            </div>
        )
    }
}

export default LeaderBoardItem;