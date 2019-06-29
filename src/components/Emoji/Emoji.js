import { styled } from 'linaria/react';
import { h } from 'preact';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Image } from './Image';
import { Text } from './Text';

const Container = styled.div`
  align-items: center;
  border: 1px solid black;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  margin: 1.5em;
  padding: 0.5em;
  width: 150px;
`;

export const Emoji = ({ src, shortcode }) => (
  <Container>
    <CopyToClipboard text={`:${shortcode}:`}>
      <Image src={src} alt={shortcode} />
    </CopyToClipboard>
    <Text>{`:${shortcode}:`}</Text>
  </Container>
);
