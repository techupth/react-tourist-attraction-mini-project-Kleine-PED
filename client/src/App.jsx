import "./App.css";
import SearchLocation from "./components/SearchLocation";
import LocationServerData from "./components/LocationServerData";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [locationServerData, setLocationServerData] = useState([]);
  const [inputKeysearch, setInputKeysearch] = useState("");

  const getLocationData = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${inputKeysearch}`
    );
    //console.log(result);
    setLocationServerData(result.data.data);
  };

  useEffect(() => {
    getLocationData();
  }, [inputKeysearch]);
  return (
    <div className="App">
      <h1>เที่ยวไหนดี</h1>
      <SearchLocation
        inputKeyState={inputKeysearch}
        setKeyState={setInputKeysearch}
      />
      <LocationServerData locationServerState={locationServerData} />
    </div>
  );
}

export default App;
