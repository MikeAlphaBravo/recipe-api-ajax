
import { Recipe } from './../js/recipe.js';

$(document).ready(function() {
  $("#form").submit(function() {
    event.preventDefault();
    $('#output').text('');
    let ingredient = $('#ingredient').val();
    let recipe = new Recipe();
    let userin = `&q=${ingredient}`;
    recipe.search2(userin);
  });
});
