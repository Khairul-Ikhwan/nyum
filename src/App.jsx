import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Store from "./pages/store/Store";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="store/*" element={<Store />} />
        <Route path="store/:id" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
