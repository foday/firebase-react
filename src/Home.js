import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new React website', body: 'lorem ipsum....', author: 'mario', id: 1},
        {title: 'Programming in c', body: 'c language is great for virus writing', author: 'sim', id: 2},
        {title: 'Java', body: 'Java is a language for system building', author: 'Luigi', id: 3}
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs listed!" handleDelete={handleDelete}/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'sim')} title="Sim's list" handleDelete={handleDelete}/ >}
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p>
        </div>
      );
}
 
export default Home;