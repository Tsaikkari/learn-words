import React from 'react';

const Score = (props) => {
  return (
    <div className="top-group">
      <h1 className="top-group__title">Test Skills</h1>
      <div className="score">
        <div className="score-result rights-score">
          <i className="fas fa-check-circle fa-3x"></i><br></br>
          <p className="right-answer" id="right-score">{props.onClick && props.rightAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
