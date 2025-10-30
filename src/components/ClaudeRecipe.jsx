import ReactMarkdown from 'react-markdown';

function ClaudeRecipe({ recipe }) {
  return (
    <section className="recipe">
      <h2 className="title-sm-sb" aria-live="polite">
        Chef Claude рекомендует:
      </h2>
      <article className="recipe__container text-lg-reg" aria-live="polite">
        <ReactMarkdown children={recipe} />
      </article>
    </section>
  );
}

export default ClaudeRecipe;
