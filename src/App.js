import {Route,Switch,Redirect} from 'react-router-dom';
import AddQuote from './pages/AddQuote'
import QuoteDetail from "./pages/QuoteDetail";
import AllQuotes from './pages/AllQuotes';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/quote/add">
          <AddQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
