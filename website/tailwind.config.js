/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
                secondary: "#243B4A",
                text: "#FFFFFF",
            },
            backgroundImage: {
                "hero-image": "bg-gradient-to-b from-blue-500 to-sky-100",
            },
        },
    },
    plugins: [],
};