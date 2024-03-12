export function Home(props) {
  let post = props.posts[0];
  console.log(post);
  return (
    <>
      <div className="container" id="home">
        <h1>
          Hello, and welcome to <br />
          <i>It&apos;s a Blog!</i>
          <br /> where every day it&apos;s a blog.
        </h1>
        <h2>{post.title}</h2>
        {/* <p>{props.posts.body}</p>
        <img src={props.posts.image} alt={props.posts.title} /> */}
      </div>
    </>
  );
}
