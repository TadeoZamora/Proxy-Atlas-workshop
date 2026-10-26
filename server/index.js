import express from "express";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// aquí irá el endpoint (paso 13)

app.listen(3001, () => console.log("Servidor listo"));
