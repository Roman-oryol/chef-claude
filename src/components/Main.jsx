import { useState } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { generateRecipe } from '../ai';

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (formData) => {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  async function getRecipe() {
    setIsLoading((prevLoading) => !prevLoading);
    const recipeMarkdown = await generateRecipe(ingredients);
    setRecipe(recipeMarkdown);
    setIsLoading(false);
  }

  return (
    <main className="container">
      <form className="add-ingredient-form" action={handleSubmit}>
        <input
          name="ingredient"
          type="text"
          aria-label="Добавить ингрeдиент"
          placeholder="Например, сыр"
        />
        <button>Добавить ингрeдиент</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          isLoading={isLoading}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

export default Main;
