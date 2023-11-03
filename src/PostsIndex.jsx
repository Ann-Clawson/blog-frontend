export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1 className="posts"> All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <img src={post.image} alt="pizza or cats" />
        </div>
      ))}
    </div>
  );
}
