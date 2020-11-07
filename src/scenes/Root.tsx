import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Root = () => (
  <Container>
    <h1>Hello World</h1>
  </Container>
);

export default Root;
