import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
// import "./index.css"
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="This is title1" desc="this is desc1" />
        <Card title="This is title2" desc="this is desc2" />
        <Card title="This is title3" desc="this is desc3" />
        <Card title="This is title4" desc="this is desc4" />
        

      </div>
      <Footer />
    </>
  );
}

export default App;
