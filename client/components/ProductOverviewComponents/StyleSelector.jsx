import React from 'react';
import StyleImage from './StyleImage';

function StyleSelector(props) {
  return (
    <div>
      <p>
        <em>Style > {props.currentStyle.name}</em>
      </p>
      <div id='StyleImages'>
        {props.styles.map((style, i) => {
          return (
            <StyleImage
              style={style}
              currentStyleIndex={props.currentStyleIndex}
              changeCurrentStyle={props.changeCurrentStyle}
              key={i}
              styleIndex={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
