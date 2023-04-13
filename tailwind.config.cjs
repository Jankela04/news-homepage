/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
        colors: {
            primary: {
                orange: "hsl(35, 77%, 62%)",
                red: "hsl(5, 85%, 63%)",
            },
            neutral: {
                offWhite: "hsl(36, 100%, 99%)",
                grayBlue: "hsl(233, 8%, 79%)",
                darkGrayBlue: "hsl(236, 13%, 42%)",
                darkBlue: "hsl(240, 100%, 5%)",
            },
        },
    },
    plugins: [],
};
