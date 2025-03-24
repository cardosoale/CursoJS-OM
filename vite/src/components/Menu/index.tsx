import './style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav className="menu">
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/10">Post 10</Link>
        <Link to="/redirect">Redirect</Link>
      </li>
    </ul>
    </nav>
  );
}
