function Main() {
  return (
    <main className="container">
      <form className="add-ingredient-form">
        <input
          type="text"
          aria-label="Добавить инградиент"
          placeholder="Например, сыр"
        />
        <button>Добавить инградиент</button>
      </form>
    </main>
  );
}

export default Main;
