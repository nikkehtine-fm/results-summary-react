/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ['"Hanken Grotesk Variable"', "system-ui", "sans-serif"],
        },
        extend: {
            fontSize: {
                summary: "18px",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
                fm: {
                    red: "hsl(0, 100%, 67%)",
                    yellow: "hsl(39, 100%, 56%)",
                    green: "hsl(166, 100%, 37%)",
                    blue: "hsl(234, 85%, 45%)",
                },
                back: {
                    slate: "hsl(252, 100%, 67%)",
                    royal: "hsl(241, 81%, 54%)",
                },
                circle: {
                    violet: "hsla(256, 72%, 46%, 1)",
                    persian: "hsla(241, 72%, 46%, 0)",
                },
                pale: "hsl(221, 100%, 96%)",
                lavender: "hsl(241, 100%, 89%)",
                grue: "hsl(224, 30%, 27%)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
