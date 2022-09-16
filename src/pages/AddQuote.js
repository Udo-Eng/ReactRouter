import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory}  from 'react-router-dom';
const AddQuote = () => {

const history = useHistory();

  const addQuoteHandler = (quote) => {
    console.log(quote);

    history.push('/quotes');
    
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
