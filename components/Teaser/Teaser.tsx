import { FC } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';

import type { ITeaserStoryblok } from '@/interfaces/TeaserStoryblok';

interface ITeaserProps {
  blok: ITeaserStoryblok;
}

const Teaser: FC<ITeaserProps> = ({ blok }) => {
  return <div {...storyblokEditable(blok)}>{blok.headline}</div>;
};

export default Teaser;
