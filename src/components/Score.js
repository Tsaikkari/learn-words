import React from 'react';

const Score = (props) => {
  return (
    <div className="top-group">
      <h1 className="top-group__title">Test Skills</h1>
      <div className="score">
        <div className="score-result rights-score">
          <i className="fas fa-check-circle fa-3x"></i><br></br>
          <p className="right-answer">{props.onClick && props.rightAnswer}</p>
        </div>
        <div className="score-result wrongs-score">
          <i className="fas fa-times-circle fa-3x"></i><br></br>
          <p className="wrong-answer">{props.onClick && props.wrongAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
