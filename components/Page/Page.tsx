import { FC } from 'react';
import {
  StoryblokServerComponent,
  storyblokEditable,
} from '@storyblok/react/rsc';

import type { IPageStoryblok } from '@/interfaces/PageStoryblok.interface';

interface IPageProps {
  blok: IPageStoryblok;
}

const Page: FC<IPageProps> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
