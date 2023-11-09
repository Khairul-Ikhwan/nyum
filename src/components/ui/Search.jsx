import { useLocation } from "react-router";
import { useState, useEffect } from "react";

export default function Search() {
  let location = useLocation();
  const currentLocation = location.pathname.toString();

  const [where, setWhere] = useState("");

  useEffect(() => {
    if (currentLocation === "/") {
      setWhere("app");
    } else {
      const paths = currentLocation.split("/").filter(Boolean); // Split and remove empty segments
      const firstPath = paths[0];
      setWhere(firstPath);
    }
  }, [currentLocation]);

  return (
    <div className="search-container">
      <input className="search" placeholder={`Search in ${where}`} />
    </div>
  );
}
