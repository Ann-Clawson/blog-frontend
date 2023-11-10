import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("handle submit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div id="posts-new">
      <h1 id="new-post" className="posts">
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
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            {/* <div id="emailHelp" className="form-text">
              We&apos;ll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Body
            </label>
            <input type="text" className="form-control" id="exampleInputPassword1" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input type="url" className="form-control" id="exampleInputPassword1" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check this box
            </label>
          </div>
          <button type="submit" className="btn btn-outline-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
