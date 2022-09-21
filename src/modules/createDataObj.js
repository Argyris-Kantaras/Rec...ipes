const createDataObj = function (data, folder) {
  const allResults = [];
  data.forEach((recipe) => {
    const obj = {
      cookTime: recipe.cook_time_minutes ? recipe.cook_time_minutes : "",
      country: recipe.country ? recipe.country : "",
      description: recipe.description ? recipe.description : "",
      id: recipe.id ? recipe.id : "",
      language: recipe.language ? recipe.language : "",
      name: recipe.name ? recipe.name : "Name not defined",
      numServings: recipe.num_servings ? recipe.num_servings : "",
      sections: recipe.sections ? recipe.sections : "",
      slug: recipe.slug ? recipe.slug : "",
      tags: recipe.tags ? recipe.tags : "",
      smallImg: recipe.thumbnail_url ? recipe.thumbnail_url : "",
      topics: recipe.topics ? recipe.topics : "",
      totalTime: recipe.total_time_minutes ? recipe.total_time_minutes : "",
      displayTotalTime: recipe.total_time_tier
        ? recipe.total_time_tier.display_tier
        : "",
      ratingNegative: recipe.user_ratings
        ? recipe.user_ratings.count_negative
        : "",
      ratingPositive: recipe.user_ratings
        ? recipe.user_ratings.count_positive
        : "",
      ratingScore: recipe.score ? recipe.score : "",
      videoId: recipe.video_id ? recipe.video_id : "",
      video: recipe.video_url ? recipe.video_url : "",
    };
    allResults.push(obj);
  });
  folder(allResults);
};

export default createDataObj;
