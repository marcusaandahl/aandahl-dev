import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            dark: {
                DEFAULT: "#212121",
                900: "#373737",
                800: "#4d4d4d",
                700: "#636363",
                600: "#797979",
                500: "#909090",
                400: "#a6a6a6",
                300: "#bcbcbc",
                200: "#d2d2d2",
                100: "#e8e8e8",
            },
            white: "#ffffff",
            red: "#ff0000"
        },
        fontSize: {
            h1: [
                "24px",
                {
                    lineHeight: "normal",
                    fontWeight: 600
                }
            ],
            h2: [
                "18px",
                {
                    lineHeight: "normal",
                    fontWeight: 500
                }
            ],
            huge: [
                "16px",
                {
                    lineHeight: "normal",
                    fontWeight: 400
                }
            ],
            big: [
                "14px",
                {
                    lineHeight: "normal",
                    fontWeight: 400
                }
            ],
            DEFAULT: [
                "12px",
                {
                    lineHeight: "normal",
                    fontWeight: 400
                }
            ],
            small: [
                "10px",
                {
                    lineHeight: "normal",
                    fontWeight: 400
                }
            ]
        }
    },
    plugins: [],
}
export default config
