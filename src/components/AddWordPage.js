import React from 'react';
import { connect } from 'react-redux';
import WordForm from './WordForm';
import { startAddWord } from '../actions/words'

export class AddWordPage extends React.Component {
  onSubmit = (wordItem) => {
    this.props.startAddWord(wordItem);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Word</h1>
          </div>
        </div>
        <div className="content-container">
          <WordForm 
            onSubmit={this.onSubmit}
          /> 
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddWord: (wordItem) => dispatch(startAddWord(wordItem)) 
});

export default connect(undefined, mapDispatchToProps)(AddWordPage); 