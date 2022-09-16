import QuoteForm from "../components/quotes/QuoteForm";

const AddQuote = () => {

  const addQuotesHandler = (quote) => {
    console.log(quote);
  }

  return <QuoteForm onAddQuote={addQuotesHandler} />;
};

export default AddQuote;
