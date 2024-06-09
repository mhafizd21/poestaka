import { Outlet } from "react-router-dom";
import Container from "./Container";

const Layouts = () => {
  return (
    <div className="layouts">
      <header className="layouts__header">
        <Container>
          <div className="layouts__header-content">
            <p className="logo">
              Poestaka
            </p>
            <div>
              <div>
                icon love
              </div>
            </div>
          </div>
        </Container>
      </header>
      <div className="layouts__main">
        <Outlet />
      </div>
      <footer className="layouts__footer">
        <Container>
          Poestaka &#169; 2024
        </Container>
      </footer>
    </div>
  );
};

export default Layouts;