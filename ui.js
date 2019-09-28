class UI {
  constructor() {
    this.food = document.getElementById('food');
  }

  myMeal = (meal, ingredients) => {
    const {
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      strSource
    } = meal;

    this.food.innerHTML = `
    <div class="container d-flex flex-md-column">
        <div class="row">
        <div class="col-lg-5">
            <h2 class="text-center mb-2">${strMeal}</h2>
            <img src="${strMealThumb}" alt="" class="img-fluid mb-3"/>
            ${
              strCategory
                ? `<p><strong>Category:</strong> ${strCategory}</p>`
                : ''
            }
            ${strArea ? `<p><strong>Area:</strong> ${strArea}</p>` : ''}
            ${
              strTags
                ? `<p><strong>Tags:</strong> ${strTags
                    .split(',')
                    .join(', ')}</p>`
                : ''
            }
            <h5>Ingredients:</h5>
            <ul>
                ${ingredients.map(ingredient => `<li>${ingredient}</li>`)}
            </ul>
        </div>
        <div class="col-lg-7">
            <h3>How to cook:</h3>
            <P class="lead">${strInstructions}</P>
            <h3>Recipe Video:</h3>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${strYoutube.slice(
                  -11
                )}" allowfullscreen></iframe>
            </div>
        </div>
        </div>
    </div>
    `;
  };
}
