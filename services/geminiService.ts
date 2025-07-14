
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available from environment variables
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully,
  // but for this context, throwing an error is clear.
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Suggests a movie from a given list based on a user's prompt.
 * @param userPrompt The user's description of the movie they want.
 * @param movieTitles A list of available movie titles.
 * @returns The title of the suggested movie or 'No Match Found'.
 */
export const suggestMovie = async (userPrompt: string, movieTitles: string[]): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
    From the following list of movie titles, which one is the best match for the user's request?
    User Request: "${userPrompt}"
    Movie Titles: [${movieTitles.join(', ')}]

    Rules:
    - Only respond with the exact movie title from the list.
    - If no movie from the list is a good match for the request, respond with the exact text "No Match Found".
    - Do not add any extra explanation or punctuation.
    `;
    
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      // Using thinkingConfig to potentially improve latency for this simple matching task
      config: {
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    const suggestion = response.text.trim();
    
    // Validate that the suggestion is one of the movie titles or the specific "no match" string
    if (movieTitles.includes(suggestion) || suggestion === 'No Match Found') {
        return suggestion;
    }

    // If the model returns something unexpected, treat it as no match found.
    console.warn("Gemini returned an unexpected response:", suggestion);
    return 'No Match Found';

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get movie suggestion from AI.");
  }
};
