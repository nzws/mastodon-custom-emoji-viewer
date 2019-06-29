import { styled } from 'linaria/react';
import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { fetch as fetchPolyfill } from 'whatwg-fetch';
import { Emoji } from './components/Emoji/Emoji';
import { Spinner } from './components/Spinner';
import globalStyles from './globalStyles';

const INSTANCE_DOMAIN = 'kirishima.cloud';

const options = {
  headers: { 'content-type': 'application/json' },
  method: 'GET'
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  const [emojis, setEmojis] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetchPolyfill(`https://${INSTANCE_DOMAIN}/api/v1/custom_emojis`, options)
      .then(response => response.json())
      .then(json => {
        json.sort((a, b) => (a.shortcode > b.shortcode ? 1 : -1));
        setEmojis(json);
        setStatus(true);
      });
  }, []);

  return (
    <Container>
      {status ? (
        emojis.map(({ url, shortcode }) => (
          <Emoji src={url} shortcode={shortcode} />
        ))
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

render(<App className={globalStyles} />, document.body);
