
🍽️ AI-Powered Recipe Suggester
   This is a simple React project that lets users enter at least 4 ingredients they have at home. Using AI, the app suggests a recipe based on the entered ingredients.

🔍 Description
   The app helps users discover creative and practical recipes with just a few ingredients. By integrating AI, it provides personalized suggestions in real time.
   Users enter ingredients one by one, and after entering a minimum of four, they can request a recipe. The AI then generates a recipe suggestion in markdown format, rendered nicely in the UI.

✨ Features
   - Add multiple ingredients dynamically
   - View all added ingredients
   - Generate a recipe suggestion using AI (powered by Hugging Face API)
   - Recipe displayed in readable markdown format

🧠 About the AI Functionality
   This project uses the Mixtral-8x7B-Instruct model from Hugging Face's Inference API. The AI receives the list of ingredients and returns a suggested recipe in markdown. It may include a few extra ingredients to enhance the recipe, but keeps the suggestion practical.

🛠️ Technologies Used
   - React (Vite or CRA)
   - JavaScript (ES6+)
   - @huggingface/inference – for AI integration
   - React Markdown (optional if rendering markdown)

🚀 How to Run the Project (Vite)
- Clone the repository:
      git clone https://github.com/reza-akbari-dev/Ai-chef
      cd ai-recipe-suggester

- Install dependencies:
      npm install

- Start the development server:
   npm run dev
   Open your browser and go to the URL shown in the terminal (usually http://localhost:5173).

  📌 Note
   You will need a Hugging Face API key to use the AI feature. Replace the placeholder key in the code with your own in getRecipeFromMistral():
   const hf = new InferenceClient("your_api_key_here");
  
## 🔐 Setup Hugging Face Token
To use this project, you need a Hugging Face access token.

   1. Create a free account at [huggingface.co](https://huggingface.co/join)
   2. Go to [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
   3. Click **New token**
      - Role: **Read**
   4. Copy the token (starts with `hf_...`)
   5. Create a `.env` file in the root of this project:
   6. Then run the project with:
   ```bash
   npm run dev

