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
            <div className='leaderboard-item'>
                <div className='leaderboard-user'>
                    <div className='leaderboard-user-name'>{this.props.username}</div>
                    <div className='leaderboard-user-avatar'    >
                        <img 
                            src={this.props.avatar} 
                            alt={this.props.username} 
                            width='70px'
                            height='70px'
                        />
                    </div>
                </div>
                <div className='leaderboard-user-questions'>
                    <div className='leaderboard-user-answered'>
                        <div>
                            Answered Questions
                        </div>
                        <div>   
                            {this.props.answers}
                        </div>
                    </div>
                    <div className='leaderboard-user-created'>
                        <div>
                            Created Questions
                        </div>
                        <div> {this.props.questions}</div>
                    </div>
                </div>
                <div className={classPosition}>
                    <div className='score-title'>
                        Score
                    </div>
                    <div className='score-number'>
                        {this.props.score}
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderBoardItem;