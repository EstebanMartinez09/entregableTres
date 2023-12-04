import axios from "axios";
import { IconSearch } from '@tabler/icons-react';

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
    <section className="flex flex-col justify-center   gap-8">
      <div className=" flex justify-center relative w-screen ">
        <img
          className="animationPortal absolute w-[350px] -top-[180px]  left-[calc(50%-trasnslate-1/2)] sm:w-:[450px] sm:-top-[200px] z-0 md:w-[500px] md:-top-[240px]"
          src="/header/portal.svg"
          alt=""
        />
        <div className="z-10 relative px-4 py-8 ">
          <img src="/header/logo.svg" alt="" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mx-[4px]" >
        <div className="z-20 flex border border-[#8EFF8B] items-center max-w-[700px] mx-auto ">
          <input
            name="newLocation"
            placeholder="Type a location Id..."
            type="text"
            className="text-[#938686] text-center bg-transparent py-2 px-8 outline-none w-full"
            required
            autoComplete="off"
          />
          <button type="submit" className="border-l border-[#8EFF8B] flex gap-2 justify-center items-center h-[50px] max-w-[120px] w-[100px] bg-[#8EFF8B80] md:w-full hover:bg-[#8EFF8B] hover:text-black">
            <p className="hidden md:block">Search</p>

            <IconSearch size={20} />
          </button>
        </div>
      </form>

      <div className="mx-4">
        <article className=" md:border md: border-[#8EFF8B] md:w-full md:max-w-[900px] md:mx-auto md:p-8 grid gap-4 ">
          <h2 className="block text-[#8EFF8B] text-center font-semibold">¡Wellcom to {locationInfo?.name}!</h2>
          <ul className=" hidden  md:flex md:justify-evenly ">
            <li>Type: {locationInfo?.type}</li>
            <li>Dimension: {locationInfo?.dimension}</li>
            <li>Population: {locationInfo?.residents.length}</li>
          </ul>
        </article>
      </div>

    </section>
  );
};
