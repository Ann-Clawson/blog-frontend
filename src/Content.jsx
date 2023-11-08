import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import axios from "axios";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      // console.log(response.data);
      setPosts(response.data);
    });
  };

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const [currentPost, setCurrentPost] = useState({});

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      {/* <button onClick={handleIndexPosts}>POSTS</button> */}
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h2>Title: {currentPost.title}</h2>
        <p>Title: {currentPost.body}</p>
      </Modal>
    </div>
  );
}
