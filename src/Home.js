import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('mario');


    const handleClick = () => {
        setName('luigi');
    }

    const handleClickAgain = (name) => {
        console.log('hello '+ name);
    }
    return (
        <div>
            <h1>Homepage</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                handleClickAgain('Luigi')
            }}>Click me again</button>
        </div>
      );
}
 
export default Home;