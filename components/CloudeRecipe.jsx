import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  const cleanRecipe = String(props.recipe).trim(); // Clean spaces and ensure it's a string

  return (
    <section className="suggested-recipe-container">
      <h2>Ai Chef recommends</h2>
      <ReactMarkdown>{cleanRecipe}</ReactMarkdown>
    </section>
  );
}
