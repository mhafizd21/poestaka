import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => (
  <header className="header">
    <Container>
      <div className="header__content">
        <Link to="/" className="header__logo">
          Poestaka
        </Link>
      </div>
    </Container>
  </header>
);

export default Header;