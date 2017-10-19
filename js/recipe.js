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
      let recipes = [];
      // (readable.bikes).forEach(function(bike) {
      //   if (bike.date_stolen > LastWeek) {
      //     bikesLastWeek.push(bike);
        // }
      // });
      $("#output").html(`<h2>Title: ${readable.recipes[0].title}</h2>
                         <a target="_blank" href="${readable.recipes[0].source_url}"><img src="${readable.recipes[0].image_url}" /></a>`);
    }, function(error) {
      $("#output").text(`There was an error processing your request: ${error.message}`);
    });
  }
}
