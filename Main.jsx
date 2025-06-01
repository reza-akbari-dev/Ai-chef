import React from "react";
import CloudeRecipe from "./components/CloudeRecipe";
import IngrediantsList from "./components/IngrediantsList";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
  const [ingredients, setIngredient] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    // first change.
    // setRecipeShown((preShown) => !preShown);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  // The form action is a function that will be called when the form is submitted
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  return (
    <main>
      <form action={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <IngrediantsList
        ingredients={ingredients}
        getRecipe={getRecipe} //
      />

      {
        recipe && <CloudeRecipe recipe={recipe} /> // This component will display the recipe based on the ingredients
      }
    </main>
  );
}
