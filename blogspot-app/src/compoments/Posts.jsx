import { useState } from "react";

import Thumbnail1 from "../images/blog1.jpg";
import Thumbnail2 from "../images/blog2.jpg";
import Thumbnail3 from "../images/blog3.jpg";
import Thumbnail4 from "../images/blog4.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: 1,
    thumbnail: Thumbnail1,  
    category: "Agriculture",
    title: "This is the very first post of this blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    authorID: 1
  },
  {
    id: 2,
    thumbnail: Thumbnail2,  
    category: "Business",
    title: "This is the second post of this blog",
    desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    authorID: 2
  },
  {
    id: 3,
    thumbnail: Thumbnail3,  
    category: "Education",
    title: "This is the third post of this blog",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    authorID: 3
  },
  {
    id: 4,
    thumbnail: Thumbnail4,  
    category: "Entertainment",
    title: "This is the fourth post of this blog",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    authorID: 4
  }
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className='posts'>
        <div className="container posts__container">
      {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
        <PostItem 
          key={id}  
          thumbnail={thumbnail} 
          category={category} 
          title={title}  
          description={desc}  
          authorID={authorID} 
        />
      ))}
      </div>
    </section>
  );
}

export default Posts;
