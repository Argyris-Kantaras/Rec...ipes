const createRecipeObj = function (data, folder) {
  const obj = {
    topics: data.topics,
    name: data.name,
    img: data.thumbnail_url,
    totalTime: data.total_time_minutes,
    instructions: data.instructions,
    servings: data.num_servings,
    nutrition: data.nutrition,
    id: data.id,
    sections: data.sections,
    description: data.description,
  };
  folder(obj);
};
export default createRecipeObj;
