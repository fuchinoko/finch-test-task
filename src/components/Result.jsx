import React from 'react';

const Result = ({win}) => 
  <div>{ win? "Ого, вы выиграли! Поздравляем!": "Вы проиграли, можете сыграть еще раз."}</div>

export default Result