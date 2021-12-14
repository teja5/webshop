import './App.css';
import Customer from './component/Customers';
import Transaction from './component/Transaction';
import Village from './component/Village';
import VillageList from './component/VillageList';
import VillageListItem from './component/VillageListItem';

import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/villages">
        <VillageList></VillageList>
      </Route>
      {/* //Active NAVLinks */}
      {/*Route Path  */}
      <Link to='/villages'>VillageList </Link>
    </div>
  );
}

export default App;