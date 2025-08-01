import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }
    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};
export const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};
export const getSubscriptionDetails = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.findById(req.params.id);
    if (req.user._id !== subscriptions.user) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }
    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export const updateSubscription = async (req, res, next) => {
  try {
    const isSubscription = await Subscription.findById(req.params.id);

    if (!isSubscription) {
      const error = new Error(
        "Couldn't find any subscription with the provided ID"
      );
      error.status = 404;
      throw error;
    }

    if (!isSubscription.user.equals(req.user.id)) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }
    const subscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      const error = new Error("Subscription not found");
      error.status = 404;
      throw error;
    }

    if (!subscription.user.equals(req.user.id)) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }
    await Subscription.findByIdAndDelete(req.params.id);
    res.status(204).json({
      success: true,
      message: "Subscription deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const cancelSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      const error = new Error("Subscription not found");
      error.status = 404;
      throw error;
    }
    if (req.user._id !== subscription.user) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
