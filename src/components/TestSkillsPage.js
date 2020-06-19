import React from 'react';
import { connect } from 'react-redux';

export class TestSkillsPage extends React.Component {
  onHandlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.props.words.length);
    const randomWordItem = this.props.words[randomNumber];
    console.log(randomWordItem);
    return randomWordItem;
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
        <h3>{this.props.randomWordItem}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.words,
	filters: state.filters 
});

export default connect(mapStateToProps)(TestSkillsPage);

