# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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

