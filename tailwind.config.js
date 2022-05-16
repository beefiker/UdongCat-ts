import { plugin } from "twrnc";

module.exports = {
  theme: {
    extend: {
      colors: {
        // accent: "var(--color-border-accent)",
      },
      backgroundColor: {
        white: "#ffffff",
        lightBlack: "#333333",
        black: "#000000",
        purple: "#B66BD9",
        gray: "#929292",
        lightgray: "#F3F3F3",
        red: "#B8000B",
      },
      textColor: {
        white: "#ffffff",
        purple: "#B66BD9",
        lightPurple: "#A259FF",
        lightBlack: "#212A30",
        black: "#000000",
        blue: "#0B7B99",
        lightgray: "#ACB3BF",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        btn: {
          padding: 3,
          borderRadius: 10,
          textTransform: `uppercase`,
          backgroundColor: `#333`,
        },
        "resize-repeat": {
          resizeMode: `repeat`,
        },
        bgs: `bg-black dark:bg-white`,
        "test-merong": `px-4 py-1 rounded-full bg-red-800 text-white`,
        "flex-row-center": `flex flex-row justify-center items-center`,
        "flex-col-center": `flex flex-col justify-center items-center`,
      });
    }),
  ],
};
