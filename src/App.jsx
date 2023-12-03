import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomNumbers } from "./helpers/random";
import { Location } from "./components/Location";

function App() {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const randomDimension = getRandomNumbers(126);
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
      .then(({ data }) => {
        setLocationInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      <Location locationInfo={locationInfo} />
    </main>
  );
}

export default App;
