import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Pizza",
      body: "I like food, food tastes good.",
      image:
        "https://images.squarespace-cdn.com/content/v1/58a1ba5503596e1e0cb09ac3/1689714027921-364C907ROU4Z1QGKZONZ/230522_PrimePizza8034.jpg?format=1500w",
    },
    {
      id: 2,
      title: "Orange Cats",
      body: "They are just the best.",
      image: "https://i.redd.it/zeh71flzvzz61.jpg",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
