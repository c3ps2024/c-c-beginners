// components/Header.js
import Link from 'next/link';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about" legacyBehavior>
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/contact" legacyBehavior>
          <a>Contact Us</a>
        </Link>
      </li>
      <li>
        <Link href="/enquiry" legacyBehavior>
          <a>Enquiry</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
