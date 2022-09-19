import QuoteList from '../components/quotes/QuoteList';
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import {useEffect} from 'react';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";


// Addding DUMMY_QUOTES  DATA FOR DEMONSTRATION
// const DUMMY_QUOTES = [
//      {id: 'q1',author : 'Udo',text : 'It pays to be focused in Live'},
//      {id: 'q2',author: 'Ikedi',text : 'Love without boundaries'},
// ]
   




const AllQuotes = () => {

  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);


    useEffect(() => {
      sendRequest();
    }, [sendRequest]);

      if (status === "pending") {
        return (
          <div className="centered">
            <LoadingSpinner />
          </div>
        );
      }

      if (error) {
        return <p className="centered focused">{error}</p>;
      }

      if (
        status === "completed" &&
        (!loadedQuotes || loadedQuotes.length === 0)
      ) {
        return <NoQuotesFound />;
      }
      
     return <QuoteList quotes={loadedQuotes} />;
}


export default AllQuotes;