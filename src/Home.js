import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new React website', body: 'lorem ipsum....', author: 'mario', id: 1},
        {title: 'Programming in c', body: 'c language is great for virus writing', author: 'sim', id: 2},
        {title: 'Java', body: 'Java is a language for system building', author: 'Luigi', id: 3}
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
    ))}
           
        </div>
      );
}
 
export default Home;