require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const API  = process.env.API;
async function generateResponse() {
    const genAI = new GoogleGenerativeAI(API);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = "steps to create multiple branches on github and how to push different different codes on different different branches";

    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error("Error generating response:", error);
    }
}

// Call the function
generateResponse();
