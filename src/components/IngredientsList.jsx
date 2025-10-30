function IngredientsList({ ingredients, getRecipe, isLoading }) {
  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section className="ingredients">
      <h2 className="title-sm-sb">Ингредиенты в наличии:</h2>
      <ul className="ingredients__list text-lg-reg" aria-live="polite">
        {ingredientsList}
      </ul>
      {ingredients.length > 3 && (
        <div className="ingredients__get-recipe">
          <div>
            <h3>Готовы получить рецепт?</h3>
            <p className="text-sm">
              Сгенеририруйте рецепт из вашего списка ингредиентов.
            </p>
          </div>
          <button onClick={getRecipe}>
            {isLoading ? 'Генерирую...' : 'Получить рецепт'}
          </button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
