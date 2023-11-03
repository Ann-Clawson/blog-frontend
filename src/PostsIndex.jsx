/* eslint-disable react/prop-types */

export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1> All posts</h1>
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} alt="pizza or cats" />
          </div>
        ))}
      </div>
    </div>
  );
}
