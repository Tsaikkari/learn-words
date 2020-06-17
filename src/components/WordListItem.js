import React from 'react';
import { Link } from 'react-router-dom';

const WordListItem = ({ id, word, translation }, props) => (
	<Link className="list-item" to={`edit/${id}`}>
		<div>
			<h3 className="list-item__title">{word}</h3>
		</div>
		<h3 className="list-item__title">{translation}</h3>
	</Link>
);

export default WordListItem;