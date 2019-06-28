import { h, app } from 'hyperapp';
import '../scss/index.scss';

const INSTANCE_DOMAIN = 'kirishima.cloud';

const state = {
  emoji: []
};

const actions = {
  add: data => ({
    emoji: data
  })
};

const onFocus = e => e.target.select();

const view = (state, actions) => (
  <main>
    {state.emoji.map(v => (
      <div className="emoji">
        <img src={v.url} alt={`:${v.shortcode}:`} />
        <input type="text" value={v.shortcode} onfocus={onFocus} readonly />
      </div>
    ))}
  </main>
);

const App = app(state, actions, view, document.body);

fetch(`https://${INSTANCE_DOMAIN}/api/v1/custom_emojis`, {
  headers: { 'content-type': 'application/json' },
  method: 'GET'
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
  })
  .then(json => {
    json.sort((a, b) => (a.shortcode > b.shortcode ? 1 : -1));
    App.add(json);
  });
