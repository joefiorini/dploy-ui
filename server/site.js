var fortune = require("fortune");

var app = fortune({
}).

resource("project", {
  name: String
});

module.exports = app;
