export default function IngrediantsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <h3>⚠️ You need at least 4 ingredients for recipe suggestions.</h3>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>

      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        {props.ingredients.length > 3 && (
          <button onClick={props.getRecipe}>Get a recipe</button>
        )}
      </div>
    </section>
  );
}
