import axios from "axios";

export const Location = ({ locationInfo, setLocationInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocationId = e.target.newLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
      .then(({ data }) => {
        setLocationInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="flex flex-col justify-center  gap-8  bg-[url('/bg/bgHeader.png')]">
      <div className="relative">
        <img
          className="absolute  translate-y-[-42%] z-0"
          src="/header/Portal.gif"
          alt=""
        />
        <div className="z-100 relative px-4 py-8 ">
          <img src="/header/logo.svg" alt="" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex justify-center " >
        <div className="flex border border-[#8EFF8B] items-center ">
          <input
            name="newLocation"
            placeholder="Type a location Id..."
            type="text"
            className="text-[#938686] bg-transparent py-2 px-8 outline-none"
            required
            autoComplete="off"
          />
          <button type="submit" className="border-l border-[#8EFF8B] flex justify-center items-center h-[50px] w-[88px] bg-[#8EFF8B80]">
            <p className="hidden md:block">Search</p>

            <img src="/header/pixelarticons_search.svg" alt="" />
          </button>
        </div>
      </form>
      <article className=" md:border">
        <h2 className="block text-[#8EFF8B] text-center font-semibold">¡Wellcom to {locationInfo?.name}!</h2>
        <ul className=" hidden  md:flex ">
          <li>Type: {locationInfo?.type}</li>
          <li>Dimension: {locationInfo?.dimension}</li>
          <li>Population: {locationInfo?.residents.length}</li>
        </ul>
      </article>
    </section>
  );
};
