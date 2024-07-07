import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<PostsDisplay />} />
        <Route exact path="/create-post" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
