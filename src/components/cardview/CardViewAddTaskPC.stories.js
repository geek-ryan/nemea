import React from 'react';
import '../index.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CardViewAddTaskPC from './CardViewAddTaskPC';

storiesOf('CardViewAddTaskPC', module).add('default', () => (
  <CardViewAddTaskPC />
));
