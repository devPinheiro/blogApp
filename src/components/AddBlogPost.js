import React, { useState } from 'react'

export const AddBlogPost = ({ addBlogPost }) => {

   const [image, setImage] = useState("");
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [image_url, setUrl] = useState("");

   const uploadImage = () => {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "kudade")
      data.append("cloud_name", "appnet")
      fetch("  https://api.cloudinary.com/v1_1/breellz/image/upload", {
         method: "post",
         body: data
      })
         .then(resp => resp.json())
         .then(data => {
            setUrl(data.url)
         })
         .catch(err => console.log(err))
   }

   const onSubmit = (e) => {

      e.preventDefault();
      uploadImage()
      addBlogPost({ title, body, image_url });

   }



   return (

      <form onSubmit={onSubmit} style={{ disply: 'flex', flexDirection: 'column' }}>
         <input
            type='text'
            name='title'
            style={{ flex: '10', padding: '5px' }}
            placeholder='Title....'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         ></input>
         <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
         <img src={image_url} />
         <textarea
            type='textarea'
            name='body'
            row='3'
            style={{ flex: '10', padding: '5px' }}
            placeholder='Write here...'
            value={body}
            onChange={(e) => setBody(e.target.value)}

         ></textarea>
         <input
            type='submit'
            value='submit'
            className='btn'
            style={{ flex: '1', padding: '5px' }}
         >
         </input>
      </form>
   )

}

export default AddBlogPost;
