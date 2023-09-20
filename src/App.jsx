import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import Nav from "./components/Nav";
import { useTheme } from "./themeContext";

function App() {
  const { dark } = useTheme();
  return (
    <div className={`${dark ? "bg-dark-mode-bg" : "bg-light-mode-bg"}`}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:name" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
