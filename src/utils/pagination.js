const paginationLogic = (residents, currentPage) => {
  //? Cantidfad de residentes por pagina
  const RESIDENTS_PER_PAGE = 16;
  //? Cantidad total de paginas a mostrar
  const totqalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);
  //? residentes de la pagina actual
  const sliceEnd = currentPage * RESIDENTS_PER_PAGE;
  const sliceStar = sliceEnd - RESIDENTS_PER_PAGE;
  const residentsInCurrentPage = residents.slice(sliceStar, sliceEnd);

  //? Generar el numero de paginas a mostrar
  const pages = [];
  for (let i = 1; i <= totqalPages; i++) {
    pages.push(i);
  }

  return {
    pages,
    residentsInCurrentPage,
  };
};
export { paginationLogic };
