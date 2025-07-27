import express from "express";
import { PORT } from "./configs/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Wlcome to the subscriptions tracker");
});
console.log(PORT);
app.listen(PORT, () => {
  console.log(`"Subscription tracker API running on http://localhost:${PORT}`);
});

export default app;
