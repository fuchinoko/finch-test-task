import React from 'react';
import styled from 'styled-components';

const Field = ({
  name,
  text,
  fieldAmount,
  fieldSelectedAmount,
  selectedfields,
  setSelectedfields
}) => (
  <StyledField>
    <Title>
      <Name>{name}</Name>
      <Text>{text}</Text>
    </Title>
  </StyledField>
)

export default Field

const StyledField = styled.div`
	margin-bottom: 16px;
`

const Title = styled.div`
	margin-bottom: 8px;
`

const Name = styled.span`
	margin-right: 8px;
`

const Text = styled.span`
  font-weight: 300;
`
