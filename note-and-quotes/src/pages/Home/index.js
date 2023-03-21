import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the homepage!</h1>
      <Link to="/login">Log in</Link>
    </div>
  );
}

export default Home;