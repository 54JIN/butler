const express = require("express");
const Electrician = require("../models/electrician");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/electrician", auth, async (req, res) => {
  const electrician = new Electrician({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await electrician.save();
    res.status(201).send(electrician);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/electrician/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const electrician = await Electrician.findOne({ _id, owner: req.user._id });

    if (!electrician) {
      return res.status(404).send();
    }

    res.send(electrician);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/electrician", async (req, res) => {
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
    const electricians = await Electrician.find(match)
    .limit(parseInt(req.query.limit) || 0)
    .skip(parseInt(req.query.skip) || 0)
    .sort(sort)
    .select('-createdAt -updatedAt -__v')
    .populate({
      path: 'owner', // Path to populate (the `owner` field in the `plumberSchema`)
      select: 'firstName lastName' // Fields to include from the `userSchema`
    });

    res.send(electricians);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/electrician/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "hourlyCharge", "jobsCompleted"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const electrician = await Electrician.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!electrician) {
      return res.status(404).send();
    }

    updates.forEach((update) => (electrician[update] = req.body[update]));
    await electrician.save();

    res.send(electrician);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/electrician/:id", auth, async (req, res) => {
  try {
    const electrician = await Electrician.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!electrician) {
      res.status(404).send();
    }

    res.send(electrician);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
