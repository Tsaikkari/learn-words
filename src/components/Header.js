import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import WordListFilters from './WordListFilters';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="header__item">
          <Link className="header__title" to="/dashboard">
            <h1>My Words</h1>
          </Link>
        </div>
        <div className="header__item">
        <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
        <div className="search-word">
					<WordListFilters />
				</div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);