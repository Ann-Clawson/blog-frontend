import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { PostsShow } from "./PostsShow";

export function Content() {
  //storing the data
  const [posts, setPosts] = useState([]);

  //making the data call
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      // console.log(response.data);
      setPosts(response.data);
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

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <PostsNew />
      {/* <button onClick={handleIndexPosts}>POSTS</button> */}
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
