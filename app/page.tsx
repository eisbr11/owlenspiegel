import Image from 'next/image';
import { StoryblokStory } from '@storyblok/react/rsc';

import styles from './page.module.css';
import { getStoryblokApi } from '@/lib/storyblok';

const Home = async () => {
  const { data } = await fetchData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src='/teaser.png'
          alt='Next.js logo'
          fill
          priority
        />
        <StoryblokStory story={data.story} />
      </main>
    </div>
  );
};

export default Home;

const fetchData = async () => {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get('cdn/stories/home', { version: 'draft' });
};
