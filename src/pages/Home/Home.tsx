import { Button, Container } from "../../components";
import Collection from "./Collection";
import homeBanner from "../../assets/images/home-banner.jpg";

const Home = () => {
  return (
    <div>
      <Container>
        <div className="home-section">
          <div className="w-per-7">
            <h2 className="heading">
              Where Every Book
              <br />
              Finds Its Reader
            </h2>
            <p className="mb-10 text-md">
              Welcome to Poestaka, your enchanted portal into the world of books! At Poestaka, we believe every book has a soul and every reader deserves a story that speaks to theirs. Whether you're hunting for your next literary love, diving into uncharted genres, or seeking bespoke recommendations, Poestaka is your magical companion in the world of books.
            </p>
            <Button className="btn--lg">
              Discover
            </Button>
          </div>
          <div className="w-per-5">
            <img
              src={homeBanner}
              alt="home-banner"
              className="home-banner"
            />
          </div>
        </div>
      </Container>
      <Collection />
    </div>
  );
};

export default Home;