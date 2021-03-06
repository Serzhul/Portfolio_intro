import Navigation from "./Navigation";
import Composition from "./Composition";
import Header from "./Header";
import Featrues from "./Features";
import Projects from "./Projects";
import Stories from "./Stories";
import Book from "./Book";
import Footer from "../layout/Footer";
import Popup from "../css/img/lineicons/react-files/icons/popup";

const Main = () => {
  return (
    <main>
      <Navigation />
      <Header />
      <Composition />
      <Featrues />
      <Projects />
      <Stories />
      <Book />
      <Footer />
      <Popup />
    </main>
  );
};

export default Main;
