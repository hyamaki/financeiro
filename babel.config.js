module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    // O preset que permite ao Babel entender o TypeScript
    "@babel/preset-typescript",
  ],
};
