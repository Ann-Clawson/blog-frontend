/* eslint-disable react/prop-types */

export function PostsIndex(props) {
  // console.log(props);
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

    <div id="posts-index">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* <h1> All posts</h1> */}
        {/* <div className="card-group"> */}
        {props.posts.map((post) => (
          <div className="col" key={post.id}>
            <div className="card">
              <img src={post.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <button type="button" className="btn btn-outline-info" onClick={() => props.onShowPost(post)}>
                  Read On
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
