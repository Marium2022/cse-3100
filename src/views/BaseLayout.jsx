import { Link } from 'react-router-dom';

export default function BaseLayout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/available-cats">Available Cats</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
