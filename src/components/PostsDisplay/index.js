import { useSelector } from 'react-redux';
import PostItem from "../PostItem"
import "../../styles/index.css"


const PostsDisplay = () => {
  const posts = useSelector((state) => state.posts.items);

  return (
    <div className="posts-display">
      <h2 className='title'>Posts</h2>
      <ul className='posts-list'>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostsDisplay;
