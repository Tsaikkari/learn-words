import React from 'react';
import { Link } from 'react-router-dom';

const WordsIntro = () => {
	return (
		<div className="middle-section">
			<div className="content-container">
				<div className="middle-section__actions">
					<Link className="button" to="/create">Add Word</Link>
          <Link className="test" to="/test">Memory Test</Link>
				</div>
			</div>
		</div>
	);
}

export default WordsIntro;