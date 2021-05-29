import React from 'react';
import * as rb from 'react-bootstrap';

const onClick = (props) => (e) => {
  setImmediate(() => {
    e.target.blur();
  });
  if (props.onClick) props.onClick(e);
};

const getPropsForElement = (props) => ({ ...props, onClick: onClick(props) });

const Button = (props) => <rb.Button {...getPropsForElement(props)} />;

export default Button;
