import { type ReactNode, useEffect, useState } from 'react';

import BlogPosts, { BlogPost } from './components/BlogPosts';
import { get } from './util/http';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPost] = useState<BlogPost[]>();
  const [isFeching, setIsFeching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPosts() {
      setIsFeching(true);
      try {
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
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsFeching(false);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  if (isFeching) {
    content = <p id="loading-fallback"> Fetching posts...</p>;
  }

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

