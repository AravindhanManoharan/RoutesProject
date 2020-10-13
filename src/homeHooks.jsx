import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Home = props => {

    const [homeFlag, setHomeFlag] = useState(true);
    // const [homeFlag, setHomeFlag] = useState(true);


    const handleClick = () => {
        // this.setState({
        //     homeFlag: false
        // })
        setHomeFlag(false)
    }

    return (
        <div>
            {
                <Link to={`/user`} onClick={handleClick}><h3>Welcome to world of React-js</h3></Link>

            }
        </div>
    )
}

export default Home