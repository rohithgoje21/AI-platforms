import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Toggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button variant="outline-light" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
}