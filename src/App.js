import './App.css';
import Customer from './component/Customers';
import Transaction from './component/Transaction';
import Village from './component/Village';
import VillageList from './component/VillageList';
import VillageListItem from './component/VillageListItem';
import CounterS from './component/Counter';

import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Home from './component/Home';

function App() {

  return (
    <div>
      {/* <button onClick={
        <Redirect to='/villages'></Redirect>
      }></button> */}
      <Switch>
        {/* <Route path='*' >
          <Home></Home>
        </Route> */}
        {/* <Route>
          <CounterS></CounterS>
        </Route> */}
        <Route path="/villages">
          <Village></Village>
        </Route>
        <Route path='/villagesList'>
          <VillageList></VillageList>
        </Route>
        <Route path='/transactions'>
          <Transaction></Transaction>
        </Route>

        <Route path='*'>
          <Home></Home>
        </Route>

        <Route path='/customer'>
          <Customer></Customer>
        </Route>
        {/* //Active NAVLinks */}
        {/*Route Path  */}

      </Switch>
    </div>
  );
}

export default App;