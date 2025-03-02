import { type ReactNode, useEffect, useState } from 'react';

import BlogPosts, { BlogPost } from './components/BlogPosts';
import { get } from './util/http';
import fetchingImg from './assets/data-fetching.png';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPost] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchPosts() {
      const data = (await get(
        'https://jsonplaceholder.typicode.com/posts'
      )) as RawDataBlogPost[];

      const blogPost: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });
      setFetchedPost(blogPost);
    }
    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src={fetchingImg} alt="toma" />
      {content}
    </main>
  );
}

export default App;
