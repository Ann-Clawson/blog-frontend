export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>Title: {props.post.title}</h2>
      <p>Title: {props.post.body}</p>
    </div>
  );
}
