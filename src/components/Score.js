import React from 'react';

const Score = (props) => {
  return (
    <div className="top-group">
      <h1 className="top-group__title">Test Skills</h1>
      <div className="score">
      <div className="score-icon">
        <i className="fas fa-check-circle fa-3x"></i>
        </div>
        <div className="score-items">
          <p className="right-answer" id="right-score">{props.onClick && props.rightAnswer} / {props.onClick && props.totalScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
