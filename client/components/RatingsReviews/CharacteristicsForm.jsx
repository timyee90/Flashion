import React, { useState } from 'react';
import { characteristicsChart } from '../../../utils/computations';

const CharacteristicsForm = (props) => {
  const characteristics = [
    'size',
    'width',
    'comfort',
    'quality',
    'length',
    'fit',
  ].map((el, index) => {
    const description = (
      <tr>
        {[0, 1, 2, 3, 4, 5].map((index) => {
          if (index === 0) {
            return <td></td>;
          }
          return <td key={index}>{characteristicsChart[el][index]}</td>;
        })}
      </tr>
    );
    const row = (
      <tr key={index} className={props.warnings[el] ? 'warning' : ''}>
        <td>{el} </td>
        {['1', '2', '3', '4', '5'].map((value) => {
          return (
            <td key={value}>
              <label>
                {value}
                <input
                  name={el}
                  type='radio'
                  value={value}
                  onChange={(e) => props.handleCharacteristics(e, el)}></input>
              </label>
            </td>
          );
        })}
      </tr>
    );

    return (
      <>
        {description}
        {row}
      </>
    );
  });
  return <>{characteristics}</>;
};

export default CharacteristicsForm;
