import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'


const PostAuthor = ({authorID, createdAt}) => {
   const [author, setAuthor] = useState({})

   useEffect(() => {
    const getAuthor = async () => {
       try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${authorID}`);
          setAuthor(response?.data);
       } catch (error) {
          console.log(error);
       }
    };
 
    getAuthor();
 
 }, [])


  return (
    <Link to={`/posts/users/sdfsdf`} className="post__author">
        <div className="post__author-avatar">
            <img src={`${import.meta.env.VITE_ASSETS_URL}/uploads/${author?.avatar}`} alt=""/>
        </div>
        <div className="post__author-details">
            <h5>By: Ernest Achiever</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor