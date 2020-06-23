import React from 'react';
import { Link } from 'react-router-dom';

const WordsIntro = () => {
	return (
		<div className="page-header">
			<div className="content-container">
				<div className="page-header__actions">
					<Link className="button" to="/create">Add Word</Link>
          <Link className="test" to="/test">Test</Link>
				</div>
			</div>
		</div>
	);
}

export default WordsIntro;