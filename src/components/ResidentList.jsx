import { useEffect, useState } from "react";
import { paginationLogic } from "../utils/pagination";
import { ResidentCard } from "./residentCard";

export const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pages, residentsInCurrentPage } = paginationLogic(
    residents,
    currentPage
  );
  const handleNewPage = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(1)
  }, [residents])
  

  return (
    <>
      <section className="my-10  grid gap-8 grid-cols-[repeat(auto-fill,_250px)] justify-center max-w-[1200px] mx-auto ">
        {residentsInCurrentPage.map((resident) => (
          <ResidentCard residentURL={resident} key={resident} />
        ))}
      </section>
      {/* pagination */}
      
      <ul className=" flex gap-6 p-4 flex-wrap items-center justify-center">
        {pages.map((page) => (
          <li key={page}>
            <button className={`p-4  ${page === currentPage ? "bg-gray-500" : ""} `} onClick={() => handleNewPage(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
