import React, { useState } from 'react';

const AddBlogPost = ({ addBlogPost, loading }) => {
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image_url, setUrl] = useState('');

  const uploadImage = (file) => {
    setLoading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'ggvzv1ij');
    data.append('cloud_name', 'appnet');

    fetch(' https://api.cloudinary.com/v1_1/appnet/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addBlogPost({ title, body, image_url });
    setTimeout(() => {
      setBody('');
      setUrl('');
      setTitle('');
    }, 3000);
  };

  return <div className='form'>
      <h3 className='mb-20'>Create new post</h3>

      <form className='form' onSubmit={(e) => onSubmit(e)} style={{ display: 'flex', flexDirection: 'column' }}>
        <input type='text' name='title' required className='form-group' placeholder='Title....' value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className='file-input mb-20'>
          <input accept='image/x-png,image/gif,image/jpeg' required type='file' name='file-input' id='file-input' className='file-input__input' onChange={(e) => uploadImage(e.target.files[0])} />
          <label className='file-input__label' htmlFor='file-input' >
            <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='upload' className='svg-inline--fa fa-upload fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path fill='currentColor' d='M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z' />
            </svg>
            <span>Upload image</span>
          </label>
        </div>

        {isLoading ? <p>
            Loading...
          </p> : image_url ? <img src={image_url} className='mb-20' width='120px' alt='uploaded contnt'/> : ''}
        <textarea type='textarea' required className='form-group' name='body' placeholder='Write here...' value={body} onChange={(e) => setBody(e.target.value)} />
        <button type='submit' className='btn'>
          {loading ? 'loading...' : 'Submit'}
        </button>
      </form>
    </div>;
};

export default AddBlogPost;
