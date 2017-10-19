export class Recipe {

  apiCall() {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://food2fork.com/api/search?key=e9aad402e839456c4a04ef32990d2622`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let readable = JSON.parse(response);
      let recipeInfo = [];
      (readable.recipes).forEach(function(recipe) {
        if((recipe.title).includes('Cheese')) {
          recipeInfo.push(recipe);
        }
      });
      (recipeInfo).forEach(function(recipeFilter) {
        $("#output").append(`<h2>Title: ${recipeFilter.title}</h2>
          <a target="_blank" href="${recipeFilter.source_url}"><img src="${recipeFilter.image_url}" /></a>`);
      });
    }, function(error) {
      $("#output").text(`There was an error processing your request: ${error.message}`);
    });
  }
}
