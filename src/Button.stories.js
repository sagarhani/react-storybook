import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
.add('with background', () => (
    <Button bg="pink">Hello World</Button>
))
.add('with another background', () => (
    <Button bg="yellow">Hello Another World</Button>
));
