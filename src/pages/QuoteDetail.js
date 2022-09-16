import {useParams,Route,Link}  from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import {Fragment} from 'react';


const DUMMY_QUOTES = [
  { id: "q1", author: "Udo", text: "It pays to be focused in Live" },
  { id: "q2", author: "Ikedi", text: "Love without boundaries" },
];

const QuoteDetails = () => {

    const params = useParams();
 
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId )

    if(!quote){
      return <NoQuotesFound />
    }


  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
     <Route path={`/quotes/${params.quoteId}`} exact>
       <div className="centered">
        <Link className='btn--flat'  to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
      </div>
       </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
