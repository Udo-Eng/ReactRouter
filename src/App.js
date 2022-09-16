import  Welcome from './components/Welcome';
import  Products from './components/Products';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <h2>Router App</h2>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
    </div>
  );
}

export default App;
