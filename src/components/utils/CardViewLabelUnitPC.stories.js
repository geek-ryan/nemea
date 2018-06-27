import React from 'react';
import '../../index.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CardViewLabelUnitPC from './CardViewLabelUnitPC';

storiesOf('CardViewLabelUnitPC', module).add('default', () => (
  <CardViewLabelUnitPC />
));
