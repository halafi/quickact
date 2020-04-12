import * as React from 'react';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
// @ts-ignore
import { hot } from 'react-hot-loader';

const Container = styled(Flex)`
  height: 100vh;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Root = () => (
  <Container justifyContent="center" alignItems="center">
    <h1>Hello World</h1>
  </Container>
);

export default hot(module)(Root);
