router.post("/forgot-password");
router.put("/reset-password");
router.post("/update-password", authMiddleware);
