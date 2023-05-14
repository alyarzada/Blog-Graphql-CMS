// uno.config.ts
import { defineConfig } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  theme: {
    breakpoints: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
});
