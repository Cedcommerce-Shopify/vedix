/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.liquid"],
  },

  theme: {
    extend: {
      fontFamily: {
        "AnekLatin-Regular": ["AnekLatin-Regular", "sans-serif"],
        "AnekLatin-Medium": ["AnekLatin-Medium", "sans-serif"],
        "AnekLatin-SemiBold": ["AnekLatin-SemiBold", "sans-serif"],
        "AnekLatin-Bold": ["AnekLatin-Bold", "sans-serif"],
        "AnekDevanagari-Regular": ["AnekDevanagari-Regular", "sans-serif"],
        "AnekDevanagari-Medium": ["AnekDevanagari-Medium", "sans-serif"],
        "AnekDevanagari-SemiBold": ["AnekDevanagari-SemiBold", "sans-serif"],
        "AnekDevanagari-Bold": ["AnekDevanagari-Bold", "sans-serif"],
        "AnekDevanagari-ExtraBold": ["AnekDevanagari-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
