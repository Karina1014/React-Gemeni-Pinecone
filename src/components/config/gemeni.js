import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyC7HmJJsbwBl3mFCmdoQt_psFmsqDcO3JM";
  
  async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
   
  try {
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    const result = await chat.sendMessage(prompt);

    if (!result || !result.response) {
      throw new Error("La respuesta de la API está vacía o incompleta.");
    }

    return result.response.text;
  } catch (error) {
    console.error("Error al procesar la solicitud:", error.message);
    console.error("Detalles del error:", error); // Log para depuración avanzada
    return "Ocurrió un error al procesar tu solicitud. Verifica el log para más detalles.";
  }
}
  export default runChat;
  