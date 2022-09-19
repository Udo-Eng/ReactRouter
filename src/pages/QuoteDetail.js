import {useParams,Route,Link}  from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import {Fragment} from 'react';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// NOT  NEED AGAIN
// const DUMMY_QUOTES = [
//   { id: "q1", author: "Udo", text: "It pays to be focused in Live" },
//   { id: "q2", author: "Ikedi", text: "Love without boundaries" },
// ];

const QuoteDetails = () => {

    const {quoteId} = useParams();



    const { sendRequest, status,data: quote,error } = useHttp(getSingleQuote, true);
 
    
    // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId )


    useEffect(()=>{
        sendRequest(quoteId);
    },[sendRequest,quoteId]);


    if (status === "pending") {
      return (
        <div className="centered">
          <LoadingSpinner />;
        </div>
      );
    }

    if (error) {
      return <p className="centered focused">{error}</p>;
    }


    if(status === "completed" && !quote){
      return <NoQuotesFound />;
    }


  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
     <Route path={`/quotes/${quoteId}`} exact>
       <div className="centered">
        <Link className='btn--flat'  to={`/quotes/${quoteId}/comments`}>Load Comments</Link>
      </div>
       </Route>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
