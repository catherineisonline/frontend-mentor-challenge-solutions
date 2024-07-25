import { Link } from 'react-router-dom';
import './not-found.css';

const NotFound = () => {
    return (
        <main className="calculator not-found">
            <h2>Oooops!</h2>
            <p>404 - page not found</p>
            <Link to="/calculator"> Go to homepage</Link>
        </main>
    )
}

export default NotFound;