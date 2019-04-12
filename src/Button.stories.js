import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
.addWithJSX('with background', withInfo(`
description of the component
`)(() => (
    <Button bg="pink">Hello World</Button>
)))
.addWithJSX('with another background', () => (
    <Button bg="yellow">Hello Another World</Button>
));
