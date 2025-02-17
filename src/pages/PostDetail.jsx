
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";



const PostDetail = () => {
    return (
        <section className='post-detail'>
            <div className="container post-detail__container">
                <div className="post-detail__header">
                    <PostAuthor/>
                    <div className="post-detail__buttons">
                        <Link to="/posts/werwer/edit" className="btn sm primary">Edit</Link>
                        <Link to="/posts/werwer/delete" className="btn sm danger">Delete</Link>
                    </div>
                </div>
                <h1>This is the post title!</h1>
                <div className="post-detail__thumbnail">
                    <img src={Thumbnail} alt="Post Thumbnail" />
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ipsam exercitationem architecto voluptatibus minus? Dicta doloribus maiores porro sapiente, enim iure, ducimus dolore, quidem blanditiis excepturi tempore temporibus consequuntur facilis. Incidunt reprehenderit beatae est, odit iure minima magni sint! Reiciendis.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem vero dolorem laborum ullam est harum sapiente porro vitae vel maxime? Laborum eos eum ducimus quaerat. Deserunt, illum. Minima illo esse eligendi temporibus omnis labore earum aspernatur, magni laudantium nulla! Neque quaerat recusandae aut deleniti, in natus veritatis praesentium nam nostrum eius eum, quibusdam corporis consequuntur.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, dolorum error! Porro, esse eos numquam excepturi debitis repellat est rerum blanditiis, doloribus dolore distinctio mollitia! Molestiae repudiandae consequuntur suscipit est ex, tempore, doloremque nisi ullam ducimus quia cumque atque optio repellendus nesciunt quaerat itaque beatae porro quos assumenda, vel vero consequatur dolorum totam! Et debitis corporis pariatur explicabo optio nesciunt molestias cumque, amet ipsa ad porro quibusdam, quas molestiae quae tempora! Provident debitis cumque labore cupiditate, quod corporis natus nostrum perferendis numquam quis tenetur vel sunt impedit libero itaque ut fugit illum voluptatem! Omnis aut laborum debitis beatae rerum nobis nam aliquam, reiciendis soluta mollitia quaerat dolore molestiae provident quisquam? Illo rem dolorum vitae sunt quos.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque ab dolorem assumenda eum. Quo culpa obcaecati sit tenetur a?
                </p>
            </div>
        </section>
    )
}

export default PostDetail;
