import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Routes, Route } from "react-router-dom";

export function Content() {
  //storing the data
  const [posts, setPosts] = useState([]);

  //making the data call
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      // console.log(response.data);
      let data = response.data;
      setPosts(data.reverse());
    });
  };

  //hiding the modal on load
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  //currentPost set by handleShowPost, which is called by onShowPost in PostIndex component
  //onShowPost is called by button onClick in PostsIndex
  const [currentPost, setCurrentPost] = useState({});

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([response.data, ...posts]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      setCurrentPost(response.data);
      setIsPostsShowVisible(false);
    });

    // const handleClick = (event) => {
    //   event.preventDefault();
    //   delete axios.defaults.headers.common["Authorization"];
    //   localStorage.removeItem("jwt");
    //   window.location.href = "/";
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleClose();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/posts" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
      </Routes>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow onUpdatePost={handleUpdatePost} post={currentPost} onDestroyPost={handleDestroyPost} />
      </Modal>
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <LogoutLink /> */}
      {/* <PostsNew onCreatePost={handleCreatePost} /> */}
      {/* <AllPosts /> */}
      {/* <PostsIndex posts={posts} onShowPost={handleShowPost} /> */}
    </div>
  );
}
