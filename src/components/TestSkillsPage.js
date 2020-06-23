import React from 'react';
import { connect } from 'react-redux';

export class TestSkillsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedWord: undefined,
      pickedTranslation: undefined,
      className: '',
      error: ''
    };
    this.input = React.createRef();
  }
  onHandlePick = () => {    
    if (this.props.words.length < 1) {
      this.setState(() => ({ error: 'Please provide word(s) and translation(s) before testing.' }));
    } else {
      const randomNumber = Math.floor(Math.random() * this.props.words.length);
      const randomWordItem = this.props.words[randomNumber];
      const pickedWord = randomWordItem.word;
      const pickedTranslation = randomWordItem.translation;  
      this.setState(() => ({ pickedWord, pickedTranslation, error: '' }));
    }                
  }
  // TODO: feedback should fire when submit button clicked instead of pick word button
  render() {
    return (
      <div className="content-container">
      {this.state.error && <p className="form__error">{this.state.error}</p>} 
        <button 
          className="button button--random-word" 
          onClick={this.onHandlePick}
        >
          Pick Word
        </button>
        <h3 className="picked-word">{this.state.pickedWord}</h3>
        <div className="answer-group">
          <input
            type="text"
            className="text-input text-input__answer"
            placeholder="Your Translation"
            autoFocus
            ref={this.input}     
          />
          <button 
            className="button button--submit" 
            onClick={this.onSubmit = () => {
              this.input.current.value === this.state.pickedTranslation
            ?
              this.state.className = "fas fa-check-circle fa-2x"
            : 
              this.state.className = "fas fa-times-circle fa-2x";

              this.input.current.value = '';
            }
          }
          >
            Submit
          </button>
          <i className={this.onSubmit && this.state.className}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.words,
	filters: state.filters 
});

export default connect(mapStateToProps)(TestSkillsPage);