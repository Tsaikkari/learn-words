import React from 'react';
import { connect } from 'react-redux';
import { startIncrementRightScore, startResetCount } from '../actions/count';
import { startIncrementTotalScore, startResetTotalCount } from '../actions/totalCount';
import Button from './Button';
import Score from './Score';

export class TestSkillsPage extends React.Component {
  state = {
    pickedWord: undefined,
    pickedTranslation: undefined,
    iconName: '',
    error: ''
  };
  buttonClassName = [
    "button button--random-word",
    "button button--submit", 
    "button button--reset"];
  buttonText = ['Pick Word', 'Submit', 'Reset Score'];
  input = React.createRef();

  onHandlePick = () => {    
    if (this.props.words.length < 1) {
      this.setState(() => ({ 
        error: 'Please provide word(s) and translation before testing.' 
      }));
    } else {
      const randomNumber = Math.floor(Math.random() * this.props.words.length);
      const randomWordItem = this.props.words[randomNumber];
      const pickedWord = randomWordItem.word;
      const pickedTranslation = randomWordItem.translation;  
      this.setState(() => ({ 
        pickedWord, 
        pickedTranslation, 
        error: '' 
      }));
    }   
    document.getElementById('answer').focus();         
  };

  changeHandler = () => {
    const submitButton = document.getElementById('submit');
    const resetButton = document.getElementById('reset');
    if (submitButton.addEventListener) {
      submitButton.addEventListener = this.onSubmit()
    } else if (resetButton.addEventListener) {
      resetButton.addEventListener = this.onReset()
    }
  }
  
  onSubmit = () => {
    const totalScore = this.props.totalCount.totalScore + 1;
    this.props.startIncrementTotalScore({ totalScore });
    if (
      this.props.filters.sortBy === "word" && 
      this.input.current.value.trim() == this.state.pickedTranslation.trim() 
      || 
      this.props.filters.sortBy === "translation" && 
      this.input.current.value.trim() == this.state.pickedWord.trim()
    ) {
      const rightAnswer = this.props.count.rightAnswer + 1;
      this.props.startIncrementRightScore({ rightAnswer });
      this.setState(() => ({ 
        error: '',
        iconName: "fas fa-check-circle fa-2x"
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
      this.setState(() => ({
        error: '',
        iconName: "fas fa-times-circle fa-2x",
      }));
    } else {
      this.setState(() => ({ error: 'Please provide a translation' }));  
    } 
    this.input.current.value = '';
  };
  // TODO: needs to reset without a full page refresh
  onReset = () => {
    const count = this.props.count.rightAnswer = 0;
    this.props.startResetCount({ count });
    const totalCount = this.props.totalCount.totalScore = 0;
    this.props.startResetTotalCount({ totalCount });
  }

  render() {
    let [random, submit, reset] = this.buttonClassName;
    let [pick, check, start] = this.buttonText;
    return (
      <div className="content-container">
        <Score 
          onClick={this.changeHandler}
          rightAnswer={this.props.count.rightAnswer}
          totalScore={this.props.totalCount.totalScore}
        />
        <div className="pick-word-reset-button-area">
          {this.state.error && <p className="form__error">{this.state.error}</p>} 
          <Button 
            className={random} 
            buttonText={pick}
            onClick={this.onHandlePick}
          />
          {
            (this.props.count.rightAnswer % 10 === 0 && this.props.count.rightAnswer !== 0) ? 
          <img 
            className="feedback-image" 
            src="/images/well-done.gif" 
            style={{display: "block"}}/> 
          : 
          <img 
            className="feedback-image" 
            src="/images/well-done.gif" 
            style={{display: "none"}}
          />
          } 
          <Button 
            id="reset"
            className={reset} 
            buttonText={start}
            onClick={this.onReset}
          />
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
            id="submit"
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
  count: state.count,
  totalCount: state.totalCount
});

const mapDispatchToProps = (dispatch) => ({
  startIncrementTotalScore: (totalScore) => dispatch(startIncrementTotalScore(totalScore)),
  startIncrementRightScore: (rightAnswer) => dispatch(startIncrementRightScore(rightAnswer)),
  startResetCount: (count) => dispatch(startResetCount(count)),
  startResetTotalCount: (totalCount) => dispatch(startResetTotalCount(totalCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(TestSkillsPage);