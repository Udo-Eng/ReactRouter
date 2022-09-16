import {Fragment} from 'react';
import  Welcome from './pages/Welcome';
import  Products from './pages/Products';
import  MainHeader from './components/MainHeader';
import {Route} from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <MainHeader />
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
    </Fragment>
  );
}

export default App;
