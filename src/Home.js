const Home = () => {

    const handleClick = () => {
        console.log("handleclick fucntion output");
    }

    const handleClickAgain = (name) => {
        console.log('hello '+ name);
    }
    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                handleClickAgain('Luigi')
            }}>Click me again</button>
        </div>
      );
}
 
export default Home;