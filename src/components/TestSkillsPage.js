import React from 'react';
import { connect } from 'react-redux';

export class TestSkillsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedWord: undefined,
      pickedTranslation: undefined,
      iconName: '',
      error: ''
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
    if (this.state.translation === '') {
      this.setState(() => ({ error: 'Please provide a translation' }));  // TODO: error message should show up if no translation provided
    } else 
      //this.setState(() => ({ error: '' }));
      if (this.input.current.value === this.state.pickedTranslation) {
        this.setState(() => ({ 
          error: '',
          iconName: "fas fa-check-circle fa-2x"
        }));
      } else {
        this.setState(() => ({ 
          error: '',
          iconName: "fas fa-times-circle fa-2x"
        }));
      }
      this.input.current.value = '';
    }
  //}
 
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