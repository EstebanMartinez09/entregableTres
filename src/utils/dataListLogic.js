import axios from "axios";

async function obtenerNombresDeApis() {
  let url = 'https://rickandmortyapi.com/api/location';
  const nombres = [];

  try {
    while (url) {
      const response = await axios.get(url);
      const { info, results } = response.data;

      results.forEach((objeto) => {
        nombres.push(objeto.name);
      });

      url = info.next;
    }

    console.log(nombres);
    return nombres;
  } catch (error) {
    console.error(error);
    return [];
  }

}

export default obtenerNombresDeApis;

