export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("handle submit");
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
    window.location.href = "/posts";
  };

  return (
    <div id="posts-new">
      <h1 id="new-post" className="new-post">
        Create A New Post
      </h1>
      <div>
        {/* <form onSubmit={handleSubmit}>
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
        </form>  */}

        {/* bootstrap */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            {/* name in input is PARAM, MUST be included */}
            <input
              name="title"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            {/* <div id="emailHelp" className="form-text">
              We&apos;ll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Body
            </label>
            <textarea name="body" type="text" className="form-control" id="exampleInputPassword1" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input name="image" type="url" className="form-control" id="" required />
          </div>
          {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check this box
            </label>
          </div> */}
          <button type="submit" className="btn btn-light btn-outline-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
