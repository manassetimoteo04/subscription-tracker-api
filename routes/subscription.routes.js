import { Router } from "express";
import {
  createSubscription,
  deleteSubscription,
  getAllSubscriptions,
  getSubscriptionDetails,
  getUserSubscriptions,
  updateSubscription,
} from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";
const subscriptionRouter = Router();

subscriptionRouter.get("/", authorize, getAllSubscriptions);
subscriptionRouter.get("/:id", authorize, getSubscriptionDetails);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", authorize, updateSubscription);
subscriptionRouter.delete("/:id", authorize, deleteSubscription);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);

export default subscriptionRouter;
