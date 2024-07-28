const { app, port } = require("./app/server");

app.use("/", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});

// http://localhost:3001/
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
