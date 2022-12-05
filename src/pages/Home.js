import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import AddBlogPost from '../components/AddPost';
import Posts from '../components/PostItems';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const notify = () => toast.success('Posted successfully');

  // fetch data
  useEffect(() => {
    setLoading(true);

    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')

      .then((res) => setPosts(res.data), setLoading(false));
  }, []);
  const addBlogPost = (data) => {
    setLoading(true);
    // Using an API
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        ...data,
      })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          notify();
          return res.data;
        }
      });
  };
  return (
    <React.Fragment>
      <AddBlogPost addBlogPost={addBlogPost} loading={isLoading} />
      <div className='post-list'>
        <h3 className='mb-20'>Recent blog post</h3>
        <Posts posts={posts} />
      </div>
      <Toaster />
    </React.Fragment>
  );
};

export default Home;
