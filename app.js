// init RandomFood
const randomFood = new RandomFood();

// Init UI
const ui = new UI();

// Search button
const getFoodbtn = document.getElementById('get-food');

getFoodbtn.addEventListener('click', () => {
  randomFood.getFood().then(meal => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      }
    }

    ui.myMeal(meal, ingredients);
  });
});
