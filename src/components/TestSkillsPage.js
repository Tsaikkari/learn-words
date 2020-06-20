import React from 'react';
import { connect } from 'react-redux';

export class TestSkillsPage extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      pickedWord: undefined,
      pickedTranslation: undefined
    };
    this.src = "";
  }
  onHandlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.props.words.length);
    const randomWordItem = this.props.words[randomNumber];
    const pickedWord = randomWordItem.word;
    const pickedTranslation = randomWordItem.translation;
    this.setState(() => ({ pickedWord, pickedTranslation })); 
    return randomWordItem;
  }

  /*onSubmit = () => { This works
    const right = "Good job!";
    const wrong = "Keep practicing!";
   
    if (this.input.current.value === this.state.pickedTranslation) {
      console.log(right);
    } else {
      console.log(wrong);
    }
  }*/
  
  render() {
    return (
      <div className="content-container">
        <button 
          className="button button__random-word" 
          onClick={this.onHandlePick}
        >
          Pick Word
        </button>
        <h3 className="picked-word">{this.state.pickedWord}</h3>
        <input
          type="text"
          className="text-input text-input__answer"
          placeholder="Your Answer"
          autoFocus
          ref={this.input}     
        />
        <button 
          className="button button__submit" 
          onClick={this.onSubmit = () => {
            this.input.current.value === this.state.pickedTranslation 
          ?
            this.src = "/images/well-done.gif"
          : 
            this.src = "/images/practice.gif"
          }}
        >
          Submit
        </button>
        <img src={this.src} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.words,
	filters: state.filters 
});

export default connect(mapStateToProps)(TestSkillsPage);