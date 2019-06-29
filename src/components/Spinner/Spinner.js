import { styled } from 'linaria/react';
import { h } from 'preact';
// eslint-disable-next-line import/no-unresolved
import { HollowDotsSpinner } from 'react-epic-spinners';

const Container = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

export const Spinner = () => (
  <Container>
    <HollowDotsSpinner color="black" />
  </Container>
);
