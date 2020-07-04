import React from 'react';
import { connect } from 'react-redux';
import { startAddScore, startIncrementRightScore, startIncrementWrongScore } from '../actions/count';
import Button from './Button';
import Score from './Score';

export class TestSkillsPage extends React.Component {
  state = {
    pickedWord: undefined,
    pickedTranslation: undefined,
    iconName: '',
    error: '',
  };
  buttonClassName = ["button button--random-word", "button button--submit"];
  buttonText = ['Pick Word', 'Submit'];
  input = React.createRef();

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
  };
  
  onSubmit = (score) => {
      this.props.startAddScore(score);
    if (
      this.props.filters.sortBy === "word" && 
      this.input.current.value.trim() == this.state.pickedTranslation.trim() 
      || 
      this.props.filters.sortBy === "translation" && 
      this.input.current.value.trim() == this.state.pickedWord.trim()
    ) {
      const rightAnswer = this.props.count.rightAnswer + 1;
      this.props.startIncrementRightScore({ rightAnswer });
      console.log(rightAnswer);
      this.setState(() => ({ 
        error: '',
        iconName: "fas fa-check-circle fa-2x",
      }));
    } else if (
      this.props.filters.sortBy === 'word' && 
      this.input.current.value != '' && 
      this.input.current.value != this.state.pickedTranslation 
      || 
      this.props.filters.sortBy === 'translation' && 
      this.input.current.value != '' && 
      this.input.current.value != this.state.Word 
    ) {
      const wrongAnswer = this.props.count.wrongAnswer + 1;
      this.props.startIncrementWrongScore({ wrongAnswer });
      console.log(wrongAnswer);
      this.setState(() => ({
        error: '',
        iconName: "fas fa-times-circle fa-2x",
      }));
    } else {
      this.setState(() => ({ error: 'Please provide a translation' }));  
    } 
    this.input.current.value = '';
  };

  render() {
    let [random, submit] = this.buttonClassName;
    let [pick, check] = this.buttonText;
    return (
      <div className="content-container">
        <Score 
          onClick={this.onSubmit}
          rightAnswer={this.props.count.rightAnswer}
          wrongAnswer={this.props.count.wrongAnswer}
        />
        <div className="pick-word-button">
          {this.state.error && <p className="form__error">{this.state.error}</p>} 
          <Button 
            className={random} 
            buttonText={pick}
            onClick={this.onHandlePick}
          />
          {(this.props.count.rightAnswer % 10 === 0 && this.props.count.rightAnswer !== 0) ? 
          <img className="feedback-image" 
            src="/images/well-done.gif" 
            style={{display: "block"}}/> 
          : 
          <img className="feedback-image" 
            src="/images/well-done.gif" 
            style={{display: "none"}}/>} 
        </div>
          <h3 className="picked-word">
            {this.props.filters.sortBy === 'word' ? 
            this.state.pickedWord : 
            this.state.pickedTranslation}
          </h3>
        <div className="answer-group">
          <input
            type="text"
            id="answer"
            className="text-input text-input__answer"
            placeholder="Your Translation"
            ref={this.input}      
          />
          <Button 
            className={submit} 
            buttonText={check}
            onClick={this.onSubmit}
          />
          <i className={this.onSubmit && this.state.iconName}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.words,
  filters: state.filters,
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  startAddScore: (score) => dispatch(startAddScore(score)),
  startIncrementRightScore: (rightAnswer) => dispatch(startIncrementRightScore(rightAnswer)),
  startIncrementWrongScore: (wrongAnswer) => dispatch(startIncrementWrongScore(wrongAnswer))
});

export default connect(mapStateToProps, mapDispatchToProps)(TestSkillsPage);