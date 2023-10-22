import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
