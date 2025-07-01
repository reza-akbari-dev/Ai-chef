import React from "react";
import CloudeRecipe from "./components/CloudeRecipe";
import IngrediantsList from "./components/IngrediantsList";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
  const [ingredients, setIngredient] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
  }
  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      // recipeSection.current.scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // });
      const yCoord = recipeSection.current.getBoundingClientRect().top;
      window.scrollTo({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, []);

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
        ref={recipeSection}
        ingredients={ingredients}
        getRecipe={getRecipe}
      />

      {
        recipe && <CloudeRecipe recipe={recipe} /> // This component will display the recipe based on the ingredients
      }
    </main>
  );
}
