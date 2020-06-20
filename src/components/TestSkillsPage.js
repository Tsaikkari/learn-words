import React from 'react';
import { connect } from 'react-redux';

export class TestSkillsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedWord: undefined,
      pickedTranslation: undefined
    }
  }
  onHandlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.props.words.length);
    const randomWordItem = this.props.words[randomNumber];
    const pickedWord = randomWordItem.word;
    const pickedTranslation = randomWordItem.translation;
    this.setState(() => ({ pickedWord, pickedTranslation })); 
    return randomWordItem;
  }

  onTextChange = (e) => {
    const answer = e.target.value;
    return answer;
  };

  onSubmit = (answer) => {
    const right = "Good job!";
    const wrong = "Keep practicing!";
   
    if (answer === this.state.pickedTranslation) {
      console.log(this.state.pickedTranslation)
      console.log(right);
    } else {
      console.log(wrong);
    }
  }
  render() {
    return (
      <div className="content-container">
        <button 
          className="button button__random-word" 
          onClick={this.onHandlePick}
        >
          Pick Word
        </button>
        <h3>{this.state.pickedWord}</h3>
        <input
          type="text"
          className="text-input text-input__answer"
          placeholder="Your Answer"
          autoFocus
          value={this.answer}  // TODO: fix this
          onChange={this.onTextChange}
        />
        <button 
          className="button button__submit" 
          onClick={this.onSubmit}
        >
          Submit Answer
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.words,
	filters: state.filters 
});

export default connect(mapStateToProps)(TestSkillsPage);