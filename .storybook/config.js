// import { configure } from '@storybook/react';

// function loadStories() {
//   require('../src/stories');
// }

// configure(loadStories, module);

import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';


addParameters({
  options: {
    theme: themes.normal
  }
})

const req = require.context('../src/Frontend/app/components', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);