import React from 'react';
import PostItem from './PostItem';
import PropTypes from 'prop-types';

const PostItems = ({ posts }) => {
  return posts.map((post) => {
    return <PostItem key={post.id} post={post} />;
  });
};

//Proptypes
PostItems.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostItems;
