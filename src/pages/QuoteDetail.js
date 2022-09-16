import {useParams,Route}  from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NoQuotesFound from '../components/quotes/NoQuotesFound';



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
    <div>
     <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
