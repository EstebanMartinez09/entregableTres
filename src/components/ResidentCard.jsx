import axios from "axios";
import { useEffect, useState } from "react";

export const ResidentCard = ({ residentURL }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const bgByStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  }

  useEffect(() => {
    axios
      .get(residentURL)
      .then(({ data }) => {
        setResidentInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <article className="border border-[#8EFF8B]">
      <header className="relative overflow-hidden">
        <img src={residentInfo?.image} alt="" />
        <div className="flex gap-2 items-center absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 px-6 py-0.5 border border-[#8EFF8B] ">
          <div className={`h-3 ${bgByStatus[residentInfo?.status]} aspect-square rounded-full`}></div>
          <span className="text-[10px] font-semibold">{residentInfo?.status}</span>
        </div>
      </header>

      <section>
        <div className="flex flex-col items-center">
        <h5 className="font-bold pt-3 pb-1">{residentInfo?.name}</h5>
        <div className="h-[1px] bg-[#084851] w-[97%] "></div>
        </div>
        <ul className="flex flex-col   p-4 gap-1">
          <li className="text-[#938686] text-[10px] flex items-center">
            Specie <span className="font-medium text-white text-base text-center ml-2">{residentInfo?.species}</span>
          </li>
          <li>
            <span className="text-[#938686] text-[10px]">Origin</span> <span className="line-clamp-1">{residentInfo?.origin?.name}</span>
          </li>
          <li>
            <span className="text-[#938686] text-[10px]">Times appear</span> {residentInfo?.episode?.length} time
          </li>
        </ul>
      </section>
    </article>
  );
};
