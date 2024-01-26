import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        }
        return `rgb(var(${variableName}))`
    }
}

const colors = require('tailwindcss/colors');

const navyColor = {
    50: "#E7E9EF",
    100: "#C2C9D6",
    200: "#A3ADC2",
    300: "#697A9B",
    400: "#5C6B8A",
    450: "#465675",
    500: "#384766",
    600: "#313E59",
    700: "#26334D",
    750: "#222E45",
    800: "#202B40",
    900: "#192132",
};

export default {

    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './vendor/awcodes/overlook/resources/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                bega: ['bega', ...defaultTheme.fontFamily.sans],
                'bega-bold': ['bega-bold', ...defaultTheme.fontFamily.sans],
                'bega-medium': ['bega-medium', ...defaultTheme.fontFamily.sans],
                'bega-light': ['bega-light', ...defaultTheme.fontFamily.sans],
                'bega-semibold': ['bega-semibold', ...defaultTheme.fontFamily.sans],


            },
            textColor: {
                skin: {
                    fill: withOpacity('--color-fill'),
                }
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
                "extra-spin-slow": "spin 20s linear infinite",
            },
            backgroundColor: {
                skin: {
                    fill: withOpacity('--color-fill'),

                }
            },
            borderColor: {
                skin: {
                    fill: withOpacity('--color-fill'),

                }
            },
            gradientColorStops: {
                skin: {
                    hue: withOpacity('--color-fill'),
                },
            },
            colors: {
                info: colors.sky["500"],
                accent: "#5f5af6",
                "accent-focus": "#4d47f5",
                navy: navyColor,
                findDark:colors.gray,
                secondary: colors.slate,
                fila: "#fcf9f6",
                find: colors.orange,
                danger: colors.rose,
                primary: colors.amber,
                success: colors.green,
                warning: colors.yellow,
            },
        },
    },

    plugins: [forms, typography, require('flowbite/plugin'),],
};
