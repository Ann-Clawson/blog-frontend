export function PostsNew() {
  return (
    <div id="posts-new">
      <h1 id="new-post" className="posts">
        New post
      </h1>
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
            Image Address: <input type="url" name="" id="" />
          </div>
          <br />
          <button type="button" className="btn btn-outline-info" type="submit">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
