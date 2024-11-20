const express = require("express");
const Plumber = require("../models/plumber");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/plumber", auth, async (req, res) => {
  const plumber = new Plumber({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await plumber.save();
    res.status(201).send(plumber);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/plumber/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const plumber = await Plumber.findOne({ _id, owner: req.user._id });

    if (!plumber) {
      return res.status(404).send();
    }

    res.send(plumber);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/plumber", auth, async (req, res) => {
  const match = {};
  const sort = {};

  if(req.query.jobsCompleted) {
    match.jobsCompleted = req.query.jobsCompleted
  }

  if(req.query.sortBy) {
    const parts = req.query.sortBy.split(':')
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
  }

  try {
    await req.user.populate({
      path: "plumber",
      match,
      options: {
        limit: parseInt(req.query.limit) || null,
        skip: parseInt(req.query.skip) || null,
        sort
      }
    });
    res.send(req.user.plumber);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/plumber/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "hourlyCharge", "jobsCompleted"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const plumber = await Plumber.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!plumber) {
      return res.status(404).send();
    }

    updates.forEach((update) => (plumber[update] = req.body[update]));
    await plumber.save();

    res.send(plumber);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/plumber/:id", auth, async (req, res) => {
  try {
    const plumber = await Plumber.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!plumber) {
      res.status(404).send();
    }

    res.send(plumber);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
