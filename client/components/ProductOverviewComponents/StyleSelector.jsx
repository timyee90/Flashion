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
              key={style.style_id}
              style={style}
              changeCurrentStyle={props.changeCurrentStyle}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
