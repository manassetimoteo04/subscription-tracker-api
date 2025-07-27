import express from "express";
import { PORT } from "./configs/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) =>
  res.send({ message: "Hello from the Subscriptions tracker server" })
);
app.listen(PORT, () => {
  console.log(`"Subscription tracker API running on http://localhost:${PORT}`);
});

export default app;
