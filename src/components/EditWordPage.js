import React from 'react';
import { connect } from 'react-redux';
import WordForm from './WordForm';
import { startEditWord, startRemoveWord } from '../actions/words';

export class EditWordPage extends React.Component {
  onSubmit = (wordItem) => {
    this.props.startEditWord(this.props.wordItem.id, wordItem);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveWord({ id: this.props.wordItem.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Word</h1>
          </div>
        </div>
        <div className="content-container">
          <WordForm 
            wordItem={this.props.wordItem}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove</button> 
        </div>
      </div>
    );
  }
}
                                
const mapStateToProps = (state, props) => ({
  wordItem: state.words.find((wordItem) => wordItem.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditWord: (id, wordItem) => dispatch(startEditWord(id, wordItem)),
  startRemoveWord: (data) => dispatch(startRemoveWord(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWordPage);