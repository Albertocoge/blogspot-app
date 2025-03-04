import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";
import Loader from "../components/Loader";
import DeletePost from "./DeletePost";

const Dashboard = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { currentUser } = useContext(UserContext);
    const token = currentUser?.token;

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Redirect to login page if user isn't logged in
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    // Fetch posts when the component mounts
    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts/users/${id}`, {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` }
                });
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };

        if (token) {
            fetchPosts();
        }
    }, [id, token]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <section className="dashboard">
            {posts.length ? (
                <div className="container dashboard__container">
                    {posts.map(post => (
                        <article key={post.id} className="dashboard__post">
                            <div className="dashboard__post-info">
                                <div className="dashboard__post-thumbnail">
                                    <img src={`${import.meta.env.VITE_ASSETS_URL}/uploads/${post.thumbnail}`} alt={post.title} />
                                </div>
                                <h5>{post.title}</h5>
                            </div>
                            <div className="dashboard__post-actions">
                                <Link to={`/posts/${post._id}`} className="btn sm">View</Link>
                                <Link to={`/posts/${post._id}/edit`} className="btn sm primary">Edit</Link>
                                <DeletePost postId={post._id}/>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <h2 className="center">You have no posts yet.</h2>
            )}
        </section>
    );
};

export default Dashboard;


