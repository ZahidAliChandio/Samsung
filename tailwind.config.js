module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    extend: {
      animation: {
        "expand": "exapand 0.5s ease-in forwards",
      },
      keyframes: {
        expand: {
          "0%": { height: "100vh" },
          "50%": { height: "50vh" },
          "100%": { height: "100vh" },
        },
      },
    },
  },
  plugins: [],
};
