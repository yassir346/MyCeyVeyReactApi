import { useState } from 'react';

const Home = () => {
    const [name, getName] = useState();

    const handleClick = () => {
        getName('ME');
    }


    return ( 
        <div className="home-container">
            <h1>Hello {name}</h1>
            <h2>My profile</h2>
            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <p className="card-text">example</p>
                </div>
            </div>
            <button onClick = {handleClick}>Button</button>
            
        </div>
     );
}
 
export default Home;