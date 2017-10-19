export class Recipe {

  apiCall(ingredient) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://food2fork.com/api/search?key=e9aad402e839456c4a04ef32990d2622${ingredient}`;
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
      (readable.recipes).forEach(function(recipe) {
        $("#output").append(`<div class="card"><h2><a target="_blank"  href="${recipe.source_url}">${recipe.title}</a></h2>
          <a target="_blank" href="${recipe.source_url}"><img src="${recipe.image_url}" /></a></div>`);
      });
    }, function(error) {
      $("#output").text(`There was an error processing your request: ${error.message}`);
    });
  }
}
