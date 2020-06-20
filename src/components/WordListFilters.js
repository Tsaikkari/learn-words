import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByWord, sortByTranslation } from '../actions/filters';

export class WordListFilters extends React.Component {
	onTextChange = (e) => {
		//update the store with dispatch action generator prop accessed via connect
		this.props.setTextFilter(e.target.value);
	}
	onSortChange = (e) => {
		if (e.target.value === 'word') {
			this.props.sortByWord();
		} else if (e.target.value === 'translation') {
			this.props.sortByTranslation();
		}
	}
	render() {
		return (
			<div className="content-container content-container__search">   
				<div className="input-group">
					<div className="input-group__item">
						<input 
							type="text" 
							className="text-input"
							placeholder="Search"
							//current search text
							value={this.props.filters.text} 
							onChange={this.onTextChange} 
						/>
					</div> 
					<div className="input-group__item">
						<select 
							className="select"
							value={this.props.filters.sortBy} 
							onChange={this.onSortChange}
						>
							<option value="word">Word</option>
							<option value="translation">Translation</option>
						</select>
					</div> 
				</div>                    
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	filters: state.filters 
});

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByWord: () => dispatch(sortByWord()),
	sortByTranslation: () => dispatch(sortByTranslation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordListFilters);