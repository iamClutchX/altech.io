import "./styles.css";
import {
  Footer,
  Guide,
  Header,
  Navbar,
  Services,
  Solutions
} from "./components";
export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Solutions />
      <Guide />
      <Footer />
    </>
  );
}
