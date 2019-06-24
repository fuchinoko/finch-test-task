import React from 'react';
import styled from 'styled-components';
import { range } from '../utils';

const Field = ({
  name,
  text,
  fieldAmount,
  fieldSelectedMaxAmount,
  selectedfields,
  setSelectedfields
}) => (
  <StyledField>
    <Title>
      <Name>{name}</Name>
      <Text>{text}</Text>
    </Title>
    <Squares>
      {range(fieldAmount).map(index => {
        const isSelected = selectedfields.indexOf(index) !== -1;
        const isLimit = selectedfields.length + 1 > fieldSelectedMaxAmount;
        return (
          <Square
            key={index}
            {...{ isSelected, isLimit }}
            onClick={() => {
              console.log({
                isLimit,
                isSelected,
                selectedfields,
                index,
                fieldSelectedMaxAmount
              });
              if (isLimit && !isSelected) {
                return;
              } else if (!isSelected) {
                setSelectedfields([...selectedfields, index]);
              } else if (isSelected) {
                console.log(selectedfields.filter(e => e !== index));
                setSelectedfields(selectedfields.filter(e => e !== index));
              }
            }}
          >
            {index}
          </Square>
        );
      })}
    </Squares>
  </StyledField>
);

export default Field;

const StyledField = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.div`
  margin-bottom: 8px;
`;

const Name = styled.span`
  margin-right: 8px;
`;

const Text = styled.span`
  font-weight: 300;
`;

const Squares = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 40px);
`;

const Square = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props =>
    props.isLimit && !props.isSelected ? 'not-allowed' : 'pointer'};
  margin: ${props => (props.isSelected ? '3px' : '0px')};
  background: ${props => (props.isSelected ? '#FFD205' : '#FFF')};
  width: ${props => (props.isSelected ? '34px' : '40px')};
  height: ${props => (props.isSelected ? '34px' : '40px')};
  border: ${props => (props.isSelected ? 'none' : '1px solid #ddd')};
`;
