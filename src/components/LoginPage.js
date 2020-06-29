import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Button from './Button';

export const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">Learn Words</h1>
			<p>Memorize new words in any language.</p>
			<Button 
				className="button button--google"
				onClick={startLogin}
				buttonText="Login with Google"
			/>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

