import * as React from 'react';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';

const Container = styled(Flex)`
  height: 100vh;
`;

const Root = () => (
  <Container justifyContent="center" alignItems="center">
    <h1>404 - Not Found</h1>
  </Container>
);

export default Root;
