import { Brand } from "../helpers/Brand";

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "BrandId">;

interface User {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  description: string;
  userId: UserId;
}
const db: { users: User[]; posts: Post[] } = {
  users: [
    {
      id: "1" as UserId,
      name: "Tonmoy",
    },
  ],
  posts: [
    {
      id: "1" as PostId,
      title: "hello world",
      description: "hello world",
      userId: "1" as UserId,
    },
  ],
};
const getUserById = (id: string) => {
  return db.users.find((user) => user.id === id);
};

const getPostById = (id: string) => {
  return db.posts.find((post) => post.id === id);
};
