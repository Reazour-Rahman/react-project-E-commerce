import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
          <Shop></Shop>
          </Route>
          
          <Route exact path="/shop">
          <Shop></Shop>
          </Route>

          <Route exact path="/review">
          <OrderReview></OrderReview>
          </Route>

          <Route exact path="/inventory">
          <Inventory></Inventory>
          </Route>

          <Route exact path="*">
          <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
