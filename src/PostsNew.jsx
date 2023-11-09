import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("handle submit");
  };
  return (
    <div id="posts-new">
      <h1 id="new-post" className="posts">
        New post
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input type="text" name="title" id="" />
          </div>
          <br />
          <div>
            Body: <input type="text" name="body" id="" />
          </div>
          <br />
          <div>
            Image: <input type="url" name="image" id="" />
          </div>
          <br />
          <button type="submit" className="btn btn-outline-info">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
