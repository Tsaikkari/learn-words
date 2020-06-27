import React from 'react';

const Button = (props) => (
  <button className={props.className} onClick={props.onClick}>{props.buttonText}</button>
);

Button.defaultProps = {
  className: "button"
};  

export default Button;