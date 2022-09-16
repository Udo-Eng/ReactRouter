import Card from "../components/UI/Card";
import {Link} from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="centered">
      <Card>
        <p>Page Not Found</p>
        <Link to='/quotes' className="btn">GO TO HOME</Link>
      </Card>
    </div>
  );
};


export default NotFound;