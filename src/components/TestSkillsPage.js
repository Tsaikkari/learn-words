import React from 'react';
import { connect } from 'react-redux';

export class TestSkillsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedWord: undefined
    }
  }
  onHandlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.props.words.length);
    const randomWordItem = this.props.words[randomNumber];
    const pickedWord = randomWordItem.word;
    this.setState(() => ({ pickedWord })); 
    console.log(pickedWord)
  }

  onTextChange = (e) => {
    const answer = e.target.value;
    console.log(answer)
  };
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
          className="text-input"
          placeholder="Word"
          autoFocus
          value={this.state.word || this.state.translation}
          onChange={this.textChange}
        />
        <button 
          className="button" 
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

