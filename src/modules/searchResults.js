import axios from "axios";
import createDataObj from "./createDataObj";

const searchResults = function (folder, tag, query) {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: "20", tags: tag, q: query },
    headers: {
      "X-RapidAPI-Key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      createDataObj(response.data.results, folder);
    })
    .catch(function (error) {
      console.error(error);
    });
};
export default searchResults;
