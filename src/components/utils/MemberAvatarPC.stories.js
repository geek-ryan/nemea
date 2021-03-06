import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MemberAvatarPC from './MemberAvatarPC';

storiesOf('MemberAvatarPC', module)
  .add('profile', () => (
    <MemberAvatarPC
      profile={
        'https://ucarecdn.com/b8800d01-4651-4b77-8ca8-de58bb78f196/syami.jpg'
      }
    />
  ))
  .add('username', () => <MemberAvatarPC username="name" />);
