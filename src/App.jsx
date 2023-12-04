import axios from "axios";
import { useEffect, useState } from "react";
import { Location } from "./components/Location";
import { ResidentList } from "./components/ResidentList";
import { getRandomNumbers } from "./helpers/random";


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
    <main className="bg-black text-white min-h-screen w-[100%] bg-[url('/bg/bgMain.jpg')] bg-cover">
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} />
      <ResidentList residents={locationInfo?.residents || []} />
    </main>
  );
}

export default App;
