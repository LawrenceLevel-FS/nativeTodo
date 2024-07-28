const { app, port, router } = require("./app/server");

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
