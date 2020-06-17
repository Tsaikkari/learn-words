import React from 'react';

export default class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: props.wordItem ? props.wordItem.word : '',
      translation: props.wordItem ? props.wordItem.translation : '',
      sentence: props.wordItem ? props.wordItem.sentence : '',
      error: '',
    }
  }

  onWordChange = (e) => {
    const word = e.target.value;
    this.setState(() => ({ word }));
  };

  onTranslationChange = (e) => {
    const translation = e.target.value;
    this.setState(() => ({ translation }));
  };

  onSentenceChange = (e) => {
    const sentence = e.target.value;
    this.setState(() => ({ sentence }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.word || !this.state.translation) {
      this.setState(() => ({ error: 'Please provide word and translation.' }));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        word: this.state.word,
        translation: this.state.translation,
        sentence: this.state.sentence
      });
    }           
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>} 
        <input
          type="text"
          className="text-input"
          placeholder="Word"
          autoFocus
          value={this.state.word}
          onChange={this.onWordChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Translation"
          value={this.state.translation}
          onChange={this.onTranslationChange}
        />
        <textarea
          placeholder="Add a sentence that includes the word (optional)"
          className="textarea"
          value={this.state.sentence}
          onChange={this.onSentenceChange}
        >
        </textarea>
        <div>
          <button className="button">Save Word</button>
        </div>
      </form>
    )
  }
}