import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPost, deletePost } from '../../redux/postsSlice';
import { FaTrashAlt, FaEdit, FaRegCalendarCheck } from "react-icons/fa";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [image, setImage] = useState(post.image);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editPost({ ...post, title, content, image }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(post.title);
    setContent(post.content);
    setImage(post.image);
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  if (isEditing) {
    return (
      <div className="post-item">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='edit-post'
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='edit-post'
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} className='edit-post' />
        {image && <img src={image} alt="Post" className='post-image'/>}
        <button onClick={handleSave} className='edit-button'>Save</button>
        <button onClick={handleCancel} className='edit-button cancel'>Cancel</button>
      </div>
    );
  }

  return (
    <li className="post-item">
      <div className='post-header'>
        <h2 className='post-title'>{post.title}</h2>
        <div className='post-controls'>
          <button onClick={handleEdit} className='post-button'><FaEdit color='#ffffff'size={20}/></button>
          <button onClick={handleDelete} className='post-button'><FaTrashAlt color='#ffffff' size={20}/></button>
        </div>
      </div>
      <p className='post-content'>{post.content}</p>
      {post.image && <img src={post.image} alt="Post"  className='post-image'/>}
      <div className='date-of-posting'>
        <FaRegCalendarCheck color='#ffffff' size={16}/>
        <p className="datestamp">{post.timestamp}</p>
      </div>
    </li>
  );
};

export default PostItem;
