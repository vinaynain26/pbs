
router.get("/pgptbm-index", function (req, res, next) {
  res.render("pgptbm-index", {
    layout: "pgptbm-index",
    title: "pgptbm-index page",
    isProd: process.env.NODE_ENV === "production",
  });
});
