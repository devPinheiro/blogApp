import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogPage = ({ match }) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState('');
  const { id } = match.params;

  useEffect(
    () => {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        .then((res) => setPost(res.data), setLoading(false));
    },
    [id]
  );

  return (
    <div className='container'>
      {loading ? (
        <p>loading...</p>
      ) : (
        <section className='post-section'>
          <img
            src={
              'http://res.cloudinary.com/appnet/image/upload/v1670237294/qyintfwdwq7s0jypdw5r.jpg'
            }
            alt={'blog'}
          />
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </section>
      )}
    </div>
  );
};

export default BlogPage;
