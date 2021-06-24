import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new React website', body: 'lorem ipsum....', author: 'mario', id: 1},
        {title: 'Programming in c', body: 'c language is great for virus writing', author: 'sim', id: 2},
        {title: 'Java', body: 'Java is a language for system building', author: 'Luigi', id: 3}
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'sim')} title="Sim's list"/>
        </div>
      );
}
 
export default Home;