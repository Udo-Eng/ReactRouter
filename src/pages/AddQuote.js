import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory}  from 'react-router-dom';
import useHttp from '../hooks/use-http';
import {useEffect} from 'react';
import {addQuote} from '../lib/api';

const AddQuote = () => {

const history = useHistory();
const {sendRequest,status} = useHttp(addQuote);


// SideEffect to navigate to another page

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);


  const addQuoteHandler = (quote) => { 
    sendRequest(quote);
  }

  return (
    <QuoteForm  isLoading={status === "pending"}  onAddQuote={addQuoteHandler} />
  );
};

export default AddQuote;
