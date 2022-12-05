import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
  const { id, title } = props.post;
  return (
    <Link to={`/post/${id}`} className='post-item'>
      <img
        src={
          'http://res.cloudinary.com/appnet/image/upload/v1670237294/qyintfwdwq7s0jypdw5r.jpg'
        }
        alt={'blog'}
      />
      <p>{title}</p>
    </Link>
  );
};

//PropTypes
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};
export default PostItem;
