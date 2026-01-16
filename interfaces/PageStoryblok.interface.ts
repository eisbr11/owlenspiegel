import { SbBlokData } from '@storyblok/react/rsc';

import type { TStoryblokBlok } from '@/interfaces/StoryblokBlok.interface';

export interface IPageStoryblok extends SbBlokData {
  body: TStoryblokBlok[];
  seo_title?: string;
  seo_description?: string;
}
