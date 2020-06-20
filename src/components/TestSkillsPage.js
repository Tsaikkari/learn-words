import React from 'react';
import { connect } from 'react-redux';

export class TestSkillsPage extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      pickedWord: undefined,
      pickedTranslation: undefined,
      src: ''
    };
  }
  onHandlePick = () => {    
    const randomNumber = Math.floor(Math.random() * this.props.words.length);
    const randomWordItem = this.props.words[randomNumber];
    const pickedWord = randomWordItem.word;
    const pickedTranslation = randomWordItem.translation; 
    this.setState(() => ({ pickedWord, pickedTranslation }));           
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
            console.log(this.input.current.value);
            this.input.current.value === this.state.pickedTranslation
          ?
            this.src = "/images/well-done.gif"
  
          : 
            this.src = "/images/practice.gif";
            this.input.current.value = '';
          }
        }
        >
          Submit
        </button>
        <img className="feedback__image" src={this.onSubmit && this.src} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.words,
	filters: state.filters 
});

export default connect(mapStateToProps)(TestSkillsPage);