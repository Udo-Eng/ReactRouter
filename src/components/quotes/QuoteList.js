import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {useHistory,useLocation} from 'react-router-dom';



const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};


const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation();

 const queryParams = new URLSearchParams(location.search);

 const isSortingAscending = queryParams.get('sort') === 'asc' ;

//  function to set the query string 
const setQueryParams = () => {
   return  isSortingAscending ? 'desc' : 'asc' 
};

  const changeSortingHandler =() =>{
      history.push(`/quotes?sort=${setQueryParams()}`);
  };

const SortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {SortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
