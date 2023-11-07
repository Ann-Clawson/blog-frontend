import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { useState } from "react";

export function Content() {
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  let posts = [
    {
      id: 1,
      title: "Pizza",
      body: "I like food, food tastes good.",
      image:
        "https://images.squarespace-cdn.com/content/v1/58a1ba5503596e1e0cb09ac3/1689714027921-364C907ROU4Z1QGKZONZ/230522_PrimePizza8034.jpg?format=1500w",
    },
    {
      id: 2,
      title: "Orange Cats",
      body: "They are just the best.",
      image: "https://i.redd.it/zeh71flzvzz61.jpg",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
