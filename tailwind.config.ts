import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        avatar1: "url('/images/avatar1.svg')",
        avatar2: "url('/images/avatar2.svg')",
        avatar3: "url('/images/avatar3.svg')",
        avatar4: "url('/images/avatar4.svg')",
      },
      width: {
        custom: "calc(100% - 64px)",
        friends: "calc(100% - 124px)",
      },
    },
  },
  plugins: [],
};
export default config;
