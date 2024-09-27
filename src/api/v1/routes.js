router.use("/local", require("./localLoginRoutes"));
router.use("/oauth/google", require("./oauthRoutes"));
// router.use("/oauth/facebook-or-apple", require("./oauthRoutes"));
router.use("/password", require("./passwordRoutes"));
