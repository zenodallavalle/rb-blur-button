import React from 'react';
import * as rb from 'react-bootstrap';

const onFocus = (props) => (e) => {
  setImmediate(() => {
    e.target.blur();
  });
  if (props.onFocus) props.onFocus(e);
};

const getPropsForElement = (props) => ({ ...props, onFocus: onFocus(props) });

const Button = (props) => <rb.Button {...getPropsForElement(props)} />;

export default Button;
