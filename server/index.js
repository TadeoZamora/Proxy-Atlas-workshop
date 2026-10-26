import express from "express";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/guia", async (req, res) => {
  try {
    const { pais } = req.body;
    const prompt =
      `Guía de viaje de 3 días para ${pais}. ` +
      "Incluye qué comer y un consejo local. " +
      "Responde en español.";
    const r = await ai.models.generateContent({
      model: process.env.MODELO,
      contents: prompt,
    });
    res.json({ guia: r.text });
  } catch {
    res.status(500).json({ error: "Falló la IA" });
  }
});

app.listen(3001, () => console.log("Servidor listo"));
