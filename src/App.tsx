import { useState, useEffect } from "react";
import Navbar from "./ui/navbar";
import Content from "./ui/content";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFloating = scrollY > 50;

  return (
    <>
      <div className="relative">
        <Navbar isFloating={isFloating} />
        <Content />
      </div>
    </>
  );
}

export default App;
