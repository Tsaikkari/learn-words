import React from 'react';
import { connect } from 'react-redux';
import WordListItem from './WordListItem';
import selectWords from '../selectors/words';

const WordList = (props) => (
	<div className="content-container">
		<div className="list-header">
      <div className="show-for-desktop">Word</div>
      <div className="show-for-desktop">Translation</div>
    </div>
    <div className="list-body">
    {
      props.words.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No words</span>
        </div>
      ) : (
        props.words.map((wordItem) => {
          return <WordListItem key={wordItem.id} {...wordItem} />
        })
      )
    }
    </div>
	</div>
);

const mapStateToProps = (state) => {
  return {
    words: selectWords(state.words, state.filters)
  };  
}

export default connect(mapStateToProps)(WordList);