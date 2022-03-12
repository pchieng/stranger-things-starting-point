
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import registerForm from "./RegisterForm";

const App = (props) => {
  const { name } = props;
  return (
    <>
      <h1>Welcome, {name}</h1>
    <registerForm />



      <PostList />
    </>
  );
}

export default hot(App);
