import QuoteList from '../components/quotes/QuoteList';

// Addding DUMMY_DATA

const DUMMY_QUOTES = [
     {id: 'q1',author : 'Udo',text : 'It pays to be focused in Live'},
     {id: 'q2',author: 'Ikedi',text : 'Love without boundaries'},
]
   


const AllQuotes = () => {
return <QuoteList quotes={DUMMY_QUOTES}/>;
}


export default AllQuotes;