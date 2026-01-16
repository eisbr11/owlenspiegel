'use client';

import { FC } from 'react';

import { getStoryblokApi } from '@/lib/storyblok';

interface IStoryblokProviderProps {
  children: React.ReactNode;
}

const StoryblokProvider: FC<IStoryblokProviderProps> = ({ children }) => {
  getStoryblokApi();
  return children;
};

export default StoryblokProvider;
