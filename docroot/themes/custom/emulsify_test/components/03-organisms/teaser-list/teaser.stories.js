import React from 'react';

import teaserList from './teaser-list.twig';
import teaserListData from './teaser-list.yml';

export default { title: 'Organisms/Teaser List' };

export const teaserListExample = () => (
  <div dangerouslySetInnerHTML={{ __html: teaserList(teaserListData) }} />
);
