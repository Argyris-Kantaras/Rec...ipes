import axios from "axios";
import createRecipeObj from "./createRecipeObj";

const getRecipeInfo = function (folder, id) {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      createRecipeObj(response.data, folder);
    })
    .catch(function (error) {
      console.error(error);
    });
};
export default getRecipeInfo;
