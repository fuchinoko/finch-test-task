import React from 'react';

const Result = ({ win }) => (
  <span>
    {win
      ? 'Ого, вы выиграли! Поздравляем!'
      : 'Вы проиграли, можете сыграть еще раз.'}
  </span>
);

export default Result;
