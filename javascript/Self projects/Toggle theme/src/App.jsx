import { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";


function App() {
  const [toggle, setToggle] = useState(
    localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }, [toggle]);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <Navbar toggle={toggle} handleToggle={handleToggle} />
      <div className="content">
        <h1>Welcome to My Page</h1>
        <p>This is an example of a light/dark mode toggle.</p>
      </div>
    </>
  );
}

export default App;
