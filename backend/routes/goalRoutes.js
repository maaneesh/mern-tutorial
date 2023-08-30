const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

//API //goals routes

// router.get("/", getGoals);
// router.post("/", setGoals);

router.route('/').get(getGoals).post(setGoals)

// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);

router.route('/:id').put(updateGoals).delete(deleteGoals);



module.exports = router;
