// Reemplaza al Tailwind por CDN: mismas clases, compiladas una vez.
// Regenerar tras cambiar clases en index.html o script.js:
//   npx tailwindcss@3 -c tailwind/tailwind.config.js -i tailwind/input.css -o assets/tailwind.css --minify
module.exports = {
  content: ['./index.html', './script.js'],
  theme: { extend: {} },
  plugins: [],
};
