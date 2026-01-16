import OpenAI from "openai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Инициализация
const groq = new OpenAI({
  apiKey:
    import.meta.env.VITE_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

// Главная функция
export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  console.log("🔑 Groq API initialized");
  console.log("📝 Ingredients:", ingredientsString);

  try {
    // Используем актуальную модель
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `I have these ingredients: ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    console.log("✅ Recipe generated successfully");

    const recipe = completion.choices[0]?.message?.content;

    if (!recipe) {
      throw new Error("AI did not generate a recipe");
    }

    return recipe;
  } catch (error) {
    console.error("❌ Groq API error:", error.message);

  }
}


// Экспорт для обратной совместимости
export const getRecipeFromGroq = getRecipeFromMistral;
