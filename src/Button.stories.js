import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
.addWithJSX('with background', () => (
    <Button bg="pink">Hello World</Button>
))
.addWithJSX('with another background', () => (
    <Button bg="yellow">Hello Another World</Button>
));
