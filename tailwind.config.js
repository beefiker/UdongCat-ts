import { plugin } from "twrnc";

export const plugins = [
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
];
