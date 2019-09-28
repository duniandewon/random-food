class RandomFood {
  async getFood() {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );

    const food = await res.json();

    return food.meals[0];
  }
}
