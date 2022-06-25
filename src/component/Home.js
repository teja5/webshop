import { Link, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import classes from './home.module.css';
import VillageList from './VillageList';

let history;
const Home = () => {

    history = useHistory();

    return (

        <div >
            <h1>
                Hello
            </h1>

            <Route>
                <VillageList></VillageList>
                <Link to='/villageList'>VillageList </Link>
            </Route>

            <h2>
                {new Date().toLocaleTimeString()}
            </h2>
            <div>
                <button title='Find Customer' >Find Customer </button>
                <button title='Add Customer' onClick={tick}>Add Customer </button>
            </div>

        </div>
        // <div className={classes.Home}>
        //     <button title='Find Customer'> </button>
        //     <button title='Add Customer'> </button>
        // </div>
    );
}

function tick() {
    // <div>
    //     <h1>Hello, world!</h1>
    //     <h2>It is {new Date().toLocaleTimeString()}.</h2>
    // </div>

    history.push("/transactions")
    // const history = useHistory();

    // history.push("/transactions")

    // <Link to="/transactions">Home</Link>
    console.log('Clicked' + new Date().toLocaleTimeString())

}
export default Home;