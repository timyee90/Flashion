import React from 'react';
import StyleImage from './StyleImage';

function StyleSelector(props) {
  return (
    <div>
      <p>
        <em>Style > {props.currentStyle.name}</em>
      </p>
      <div id='StyleImages'>
        {props.styles.map((style) => {
          return (
            <StyleImage
              style={style}
              changeCurrentStyle={props.changeCurrentStyle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
