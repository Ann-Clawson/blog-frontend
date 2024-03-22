/* eslint-disable react/prop-types */
import { useState } from "react";

export function PostsIndex(props) {
  // console.log(props);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    // <div id="posts-index">
    //   <h1> All posts</h1>
    //   <div className="cards">
    //     {props.posts.map((post) => (
    //       <div key={post.id} className="card">
    //         <h2>{post.title}</h2>
    //         <p>{post.body}</p>
    //         <img src={post.image} alt={post.title} />
    //         <button onClick={() => props.onShowPost(post)}>More Info</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    //bootstrap
    <>
      <div id="posts-index">
        <h1>
          Hello, and welcome to <br />
          <i>It&apos;s a Blog!</i>
          <br /> where every day it&apos;s a blog.
        </h1>
        <h1>All Posts</h1>
        <br />
        <input
          className="mb-3"
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="titles"
        />
        <datalist id="titles">
          {searchFilter === "" ? (
            <option></option>
          ) : (
            props.posts.map((post) => <option key={post.id}>{post.title}</option>)
          )}
        </datalist>
        <button className="btn btn-light btn-outline-dark" type="submit">
          Search
        </button>
        <br />
        <br />
        <div className="row row-cols-1 row-cols-md-2 g-5">
          {/* <h1> All posts</h1> */}
          {/* <div className="card-group"> */}
          {props.posts
            .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
            .map((post) => (
              <div className="col" key={post.id}>
                <div className="card">
                  <img src={post.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <button
                      type="button"
                      className="btn btn-light btn-outline-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => props.onShowPost(post)}
                    >
                      Edit Post
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="col-4 mx-auto">
        <a href="#">
          <button id="bottom-button" type="button" className="btn btn-light btn-outline-dark">
            Back To Tha Top
          </button>
        </a>
      </div>
    </>
  );
}
