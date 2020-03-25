import * as React from 'react';
import { Flex } from 'reflexbox/styled-components';
import styled from 'styled-components';
// @ts-ignore
import { hot } from 'react-hot-loader';
const Container = styled(Flex) `
  height: 100vh;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`;
const Root = () => (React.createElement(Container, { justifyContent: "center", alignItems: "center" },
    React.createElement("h1", null, "Hello World")));
export default hot(module)(Root);
//# sourceMappingURL=Root.js.map