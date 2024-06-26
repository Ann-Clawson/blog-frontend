export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          {/* name in input is PARAM, MUST be included */}
          <input
            defaultValue={props.post.title}
            name="title"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Body
          </label>
          <textarea
            defaultValue={props.post.body}
            name="body"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input defaultValue={props.post.image} name="image" type="url" className="form-control" id="" required />
        </div>
        <div>
          <button type="submit" className="btn btn-light btn-outline-dark" data-bs-dismiss="modal" id="save-changes">
            Save Changes
          </button>
        </div>
      </form>
      <button type="submit" className="btn btn-light btn-outline-dark" data-bs-dismiss="modal" onClick={handleClick}>
        Delete Post
      </button>
    </div>
  );
}
