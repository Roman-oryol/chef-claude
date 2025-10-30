const OPENROUTER_API_KEY =
  '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';

const SYSTEM_PROMPT = `
Ты — помощник, который получает список ингредиентов, имеющихся у пользователя, и предлагает рецепт,
который можно приготовить, используя некоторые или все эти ингредиенты.
Тебе не обязательно использовать каждый указанный ингредиент в рецепте.
Рецепт может включать дополнительные ингредиенты, которых нет в списке пользователя,
но старайся не добавлять слишком много лишнего.
Оформи свой ответ в Markdown, чтобы его было проще отобразить на веб-странице.
`;

async function generateRecipe(ingredients) {
  try {
    const ingredientsString = ingredients.join(', ');

    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Recipe Generator',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3-8b-instruct',
          messages: [
            {
              role: 'system',
              content: SYSTEM_PROMPT,
            },
            {
              role: 'user',
              content: `У меня есть ${ingredientsString}. Пожалуйста, порекомендуй рецепт, который я могу приготовить!`,
            },
          ],
          max_tokens: 2000,
          temperature: 0.7,
          top_p: 0.9,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Проверяем наличие контента
    if (!data.choices?.[0]?.message?.content) {
      console.log('Полный ответ API:', data);
      throw new Error('Пустой ответ от модели');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}

export { generateRecipe };
