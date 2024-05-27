import React, {useEffect ,useState} from 'react'
import "./Blog.css";
import { blog1,blog2,blog3 } from '../../assets/Index';
import { client } from '../../client';

const Blog = () => {
//     const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const query = "*[_type == 'posts' ]" ;

//     client.fetch(query).then((data) => {
//       setPosts(data);
//     });
//   } , []);

  return (
    <section id='blog' className='pink'>
        <div className='wrapper'>
            <h2 className='light'>Latest Post</h2>
            <div className='content-container'>
                {/* {posts.map((post) => ( */}
                <div className='post'>
                    <div className='tag'>Daw</div>
                    <a href="#">
                        <img src= {blog1} alt="" />
                    </a>

                    <a href="#">
                        <h3 className='post-title'>How To Use Drum Machine in Logic Pro X</h3>
                    </a>
                </div>
                {/* ))} */}

                <div className='post'>
                    <div className='tag'>Mixing</div>
                    <a href="#">
                        <img src= {blog2} alt="" />
                    </a>

                    <a href="#">
                        <h3 className='post-title'>How To Mix Guitars Effectively</h3>
                    </a>
                </div>

                <div className='post'>
                    <div className='tag'>Vox</div>
                    <a href="#">
                        <img src= {blog3} alt="" />
                    </a>

                    <a href="#">
                        <h3 className='post-title'>The Real Power of Harmonies in Music Production</h3>
                    </a>
                </div>
            </div>

            <div className='btn-container'>
                <a href="#" className='all-posts-btn'>
                    All Posts
                </a>
            </div>
        </div>

    </section>
  )
}

export default Blog
