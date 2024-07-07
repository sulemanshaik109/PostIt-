import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState : {
    items : [
      {
        id: 1,
        title: 'Redux',
        content: 'Redux is a global state management library for single-page applications. It helps you keep your app’s state synchronized and easily accessible across multiple components and makes it easy to debug and test your app.While Redux works with any programming language or framework, it works especially well with React, thanks to the React-Redux package.',
        image: "https://res.cloudinary.com/dsbxrn2tj/image/upload/v1720340375/redux2_jmsg57.jpg",
        timestamp: 'Sun Jul 07 2024'
      },
      {
        id: 2,
        title: 'React JS',
        content: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications.',
        image: "https://res.cloudinary.com/dsbxrn2tj/image/upload/v1720339422/reactjs_kc3rxs.jpg",
        timestamp: 'Sat Jul 06 2024'
      }
    ]
  },
  reducers: {
    createPost: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('posts', JSON.stringify(state.items));
    },
    editPost: (state, action) => {
      const index = state.items.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        localStorage.setItem('posts', JSON.stringify(state.items));
      }
    },
    deletePost: (state, action) => {
      state.items = state.items.filter((post) => post.id !== action.payload);
      localStorage.setItem('posts', JSON.stringify(state.items));
    },
  },
});

export const { createPost, editPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
