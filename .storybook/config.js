import { configure } from '@storybook/react';

require.context('../src', true, /.stories.js$/)

function loadStories() {
    req.keys().forEach(file => req(file));
}

configure(loadStories, module);