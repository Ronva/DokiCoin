import React from 'react';

export default (props) => (
  <div className={`content${props.background ? ' ' + props.background : ''}`} id={props.name ? props.name : ''}>
    {props.children}
  </div>
)
