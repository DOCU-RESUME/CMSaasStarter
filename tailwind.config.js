/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // Adicione ou modifique esta seção do DaisyUI
  daisyui: {
    themes: [
      {
        curriculodocumentado: {
          // Mapeando suas cores para as variáveis do DaisyUI
          primary: "#4ade80", // Verde principal
          secondary: "#22c55e", // Verde mais escuro
          accent: "#334155", // Tom de cinza/azul escuro
          neutral: "#1e293b", // Cor escura de base
          "base-100": "#f1f5f9", // Fundo claro (light)
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
}
