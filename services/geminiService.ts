
import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

export const generateBibleQuestions = async (): Promise<Question[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Generate exactly 30 unique, challenging, and accurate Bible trivia questions. Include diverse topics from both Old and New Testaments. For each question, provide a 'bgKeyword' which is a 1-3 word descriptive search term for a thematic background image (e.g., 'mount sinai', 'ancient scrolls', 'olive grove').",
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            text: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            correctAnswer: { type: Type.INTEGER },
            category: { type: Type.STRING },
            explanation: { type: Type.STRING },
            bgKeyword: { type: Type.STRING }
          },
          required: ["id", "text", "options", "correctAnswer", "category", "explanation", "bgKeyword"]
        }
      }
    }
  });

  try {
    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return [];
  }
};
