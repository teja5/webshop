import './App.css';
import Customer from './component/Customer';
import Transaction from './component/Transaction';
import Village from './component/Village';
import VillageList from './component/VillageList';
import VillageListItem from './component/VillageListItem';
import CounterS from './component/Counter';

import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Home from './component/Home';
import TransactionList from './component/transaction/TransactionList';
import CustomerList from './component/customer/CustomerList';
import EditVillage from './component/village/EditVillage';
import ListComp from './component/ListComp';

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
        <Route path="/editVillage">
          <EditVillage></EditVillage>
        </Route>
        <Route path='/villagesList'>
          <VillageList></VillageList>
        </Route>
        <Route path='/customer'>
          <Customer></Customer>
        </Route>
        <Route path='/transactions'>
          <Transaction></Transaction>
        </Route>
        <Route path='/transactionList'>
          <TransactionList></TransactionList>
        </Route>
        <Route path='/customerList'>
          <CustomerList></CustomerList>
        </Route>
        <Route path='/testComponent'>
          <ListComp></ListComp>
        </Route>

        <Route path='*'>
          <Home></Home>
        </Route>


        {/* //Active NAVLinks */}
        {/*Route Path  */}

      </Switch>
    </div>
  );
}

export default App;