import axios from "axios";
import { useEffect, useState } from "react";

export const ResidentCard = ({ residentURL }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const bgByStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  };

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
      <header className="relative overflow-hidden border-b border-[#8EFF8B]">
        <img src={residentInfo?.image} alt="" />
        <div className="flex gap-2 items-center absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 px-6 py-0.5 border border-[#8EFF8B] ">
          <div
            className={`h-3 ${bgByStatus[residentInfo?.status]
              } aspect-square rounded-full`}
          ></div>
          <span className="text-[10px] font-semibold">
            {residentInfo?.status}
          </span>
        </div>
      </header>

      <section>
        <div className="flex flex-col items-center">
          <h5 className="font-bold pt-3 pb-1 line-clamp-1">{residentInfo?.name}</h5>
          <div className="h-[1px] bg-[#084851] w-[97%] "></div>
        </div>

        <article className="flex text-left p-4 ">
          <div className="min-w-[90px] flex flex-col gap-2">
            <p className="text-[#938686] text-[10px]">Specie</p>
            <p className="text-[#938686] text-[10px]">Origin</p>
            <p className="text-[#938686] text-[10px]">Times appea</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[12px] line-clamp-1">{residentInfo?.species}</p>
            <p className="font-semibold text-[12px] line-clamp-1">{residentInfo?.origin?.name}</p>
            <p className="font-semibold text-[12px] line-clamp-1">{residentInfo?.episode?.length} time</p>
          </div>

        </article>


      </section>
    </article>
  );
};
