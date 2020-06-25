import React from 'react';
import { connect } from 'react-redux';

export class TestSkillsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedWord: undefined,
      pickedTranslation: undefined,
      iconName: '',
      error: '',
      rightAnswer: 0,
      wrongAnswer: 0
    };
    this.input = React.createRef();
  }
  onHandlePick = () => {    
    if (this.props.words.length < 1) {
      this.setState(() => ({ error: 'Please provide word(s) and translation before testing.' }));
    } else {
      const randomNumber = Math.floor(Math.random() * this.props.words.length);
      const randomWordItem = this.props.words[randomNumber];
      const pickedWord = randomWordItem.word;
      const pickedTranslation = randomWordItem.translation;  
      this.setState(() => ({ pickedWord, pickedTranslation, error: '' }));
    }   
    document.getElementById('answer').focus();         
  }
  
  onSubmit = () => {
    if (this.input.current.value.trim() == this.state.pickedTranslation.trim()) {
      this.setState((prevState) => ({ 
        error: '',
        iconName: "fas fa-check-circle fa-2x",
        rightAnswer: prevState.rightAnswer + 1
      }));
    } else if (this.input.current.value != '' && this.input.current.value != this.state.pickedTranslation) {
      this.setState((prevState) => ({
        error: '',
        iconName: "fas fa-times-circle fa-2x",
        wrongAnswer: prevState.wrongAnswer + 1
      }));
    } else {
      this.setState(() => ({ error: 'Please provide a translation' }));  
    } 
    this.input.current.value = '';
  }

  render() {
    return (
      <div className="content-container">
        <div className="top-group">
          <h1 className="top-group__title">Test Skills</h1>
          <div className="score">
            <div className="score-result rights-score">
              <i className="fas fa-check-circle fa-3x"></i><br></br>
              <p className="right-answer">{this.onSubmit && this.state.rightAnswer}</p>
            </div>
            <div className="score-result wrongs-score">
              <i className="fas fa-times-circle fa-3x"></i><br></br>
              <p className="wrong-answer">{this.onSubmit && this.state.wrongAnswer}</p>
            </div>
          </div>
        </div>
      <div className="pick-word-button">
      {this.state.error && <p className="form__error">{this.state.error}</p>} 
        <button 
          className="button button--random-word" 
          onClick={this.onHandlePick}
        >
          Pick Word
        </button>{(this.state.rightAnswer % 10 === 0 && this.state.rightAnswer !== 0) ? 
        <img className="feedback-image" src="/images/well-done.gif" style={{display: "block"}}/> 
        : 
        <img className="feedback-image" src="/images/well-done.gif" style={{display: "none"}}/>} 
      </div>
        <h3 className="picked-word">{this.state.pickedWord}</h3>
      
        <div className="answer-group">
          <input
            type="text"
            id="answer"
            className="text-input text-input__answer"
            placeholder="Your Translation"
            ref={this.input}      
          />
          <button 
            className="button button--submit" 
            onClick={this.onSubmit}
          >
            Submit
          </button>
          <i className={this.onSubmit && this.state.iconName}/>
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