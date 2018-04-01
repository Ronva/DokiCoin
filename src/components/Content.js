import React from 'react';

export default (props) => (
  <div className={`content${props.background ? ' ' + props.background : ''}`} id={props.name}>
    {props.children}
    {props.title && <h1 className="title">{props.title}</h1>}
    {/*{props.next && <span className="next" onClick={() => {window.scrollBy(640, 0)}}><span>></span></span>}*/}
  </div>
)
