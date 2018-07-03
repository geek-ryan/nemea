import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProjectCardUnitPC from './ProjectCardUnitPC';

storiesOf('ProjectCardUnitPC', module).add('default', () => (
  <ProjectCardUnitPC />
));