// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import cats from "./IMG_7158.jpg";
// import "./App.css";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div>
        <form action="">
          <div>
            Title: <input type="text" name="" id="" />
          </div>
          <br />
          <div>
            Body: <input type="text" name="" id="" />
          </div>
          <br />
          <div>
            Image: <input type="url" name="" id="" />
          </div>
        </form>
      </div>
    </div>
  );
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div>
        <h3>Pizza</h3>
        <p>I like food, food tastes good.</p>
        <img
          src="https://images.squarespace-cdn.com/content/v1/58a1ba5503596e1e0cb09ac3/1689714027921-364C907ROU4Z1QGKZONZ/230522_PrimePizza8034.jpg?format=1500w"
          alt="slices of pizza"
        />
      </div>
      <div>
        <h3>Orange Cats</h3>
        <p>They are just the best.</p>
        <img src="https://i.redd.it/zeh71flzvzz61.jpg" alt="" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
