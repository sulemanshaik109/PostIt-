import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/postsSlice';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toDateString();
    const newPost = { id: Date.now(), title, content, image, timestamp };
    dispatch(createPost(newPost));
    history('/');
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="create-post">
      <h2 className='title'>Create Post</h2>
      <form onSubmit={handleSubmit} className='form-container'>
        <div>
          <p className='label' htmlFor="postTitle">Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='edit-post'
            id="postTitle"
            placeholder='Enter Title of Post'
          />
        </div>
        <div>
          <p className='label' htmlFor="postContent">Content</p>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='edit-post'
            id="postContent"
            placeholder='Enter Content of Post'
          ></textarea>
        </div>
        <div>
          <label className='label' htmlFor='postImage'>Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className='edit-post' id="postImage"/>
        </div>
        <button type="submit" className='edit-button'>Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
