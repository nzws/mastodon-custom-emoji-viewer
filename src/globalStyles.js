import { css } from 'linaria';
import { normalize } from 'polished';

const globalStyles = css`
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  :global() {
    ${normalize()}
    * {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`;

export default globalStyles;
