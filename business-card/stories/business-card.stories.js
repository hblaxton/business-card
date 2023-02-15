import { html } from 'lit';
import '../src/business-card.js';

export default {
  title: 'BusinessCard',
  component: 'business-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <business-card
      style="--business-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </business-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
