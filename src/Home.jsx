export function Home(props) {
  console.log(props.posts);
  return (
    <>
      <div className="container" id="home">
        <h1>
          Hello, and welcome to <br />
          <i>It&apos;s a Blog!</i>
          <br /> where every day it&apos;s a blog.
        </h1>
        <br />
        {/* <h2>{props.posts[0].title}</h2> */}
      </div>
    </>
  );
}
