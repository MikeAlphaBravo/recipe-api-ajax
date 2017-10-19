
import { Recipe } from './../js/recipe.js';

$(document).ready(function() {
  $("#search").click(function() {
    event.preventDefault();
    let recipe = new Recipe();
    recipe.apiCall();
  });
});
