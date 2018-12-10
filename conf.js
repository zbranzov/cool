exports.config = {
  framework: "mocha",
  specs: ["cool.tests.js"],
  highlightDelay: 1000, // Remove on debug
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: [
        "--window-size=1280,1024",
        "--no-sandbox",
        "--disable-dev-shm-usage"
      ]
    }
  },
  mochaOpts: {
    reporter: "mochawesome",
    slow: 3000,
    timeout: 20000
  }
};
