const { plugin } = require("twrnc");

module.exports = {
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
        "test-merong": `px-4 py-1 rounded-full bg-red-800 text-white`,
        "flex-row-center": `flex-row justify-center items-center`,
        "flex-col-center": `flex-col justify-center items-center`,
      });
    }),
  ],
};
