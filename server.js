const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();

app.engine("hbs", engine({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "views/layouts"),
  defaultLayout: false,
  partialsDir: path.join(__dirname, "views/partials"),
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render("pgptbm-index", {
    layout: "pgptbm-index",
    title: "PGPTBM Index",
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});