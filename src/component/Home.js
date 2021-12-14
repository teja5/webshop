import classes from './home.module.css';

const Home = () => {
    return (
        <div className={classes.home}>
            <h1>
                Hello
            </h1>
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
    console.log('Clicked' + new Date().toLocaleTimeString())
}
export default Home;