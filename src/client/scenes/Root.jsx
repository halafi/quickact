import React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

const Container = styled(Flex)`
  height: 100vh;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`;

const Root = () => (
  <Container justifyContent="center" alignItems="center">
    <h1>Hello World</h1>
  </Container>
);

export default hot(module)(Root);
