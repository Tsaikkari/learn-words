import React from 'react';
import { Link } from 'react-router-dom';

const WordsSummary = () => {
	return (
		<div className="page-header">
			<div className="content-container">
				<div className="page-header__actions">
					<Link className="button" to="/create">Add Word</Link>
          <Link className="test" to="/test">Test Skills</Link>
				</div>
			</div>
		</div>
	);
}

export default WordsSummary;