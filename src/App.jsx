import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import StoreFront from "./pages/storeFront/StoreFront";
import DevRoadmap from "./pages/devRoadmap/devRoadmap";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />

        <Route path="/store/*" element={<StoreFront />} />
        <Route path="/store/:id/*" element={<StoreFront />} />
        <Route path="development-roadmap" element={<DevRoadmap />} />
      </Routes>
    </>
  );
}

export default App;
