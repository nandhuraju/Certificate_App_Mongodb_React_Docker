const express = require("express");
const router = express.Router();
const certificateDetails = require("../models/certificateDetails");

router.get("/certificates", async (req, res) => {
  const details = await certificateDetails.find({});
  res.json(details);
});

// router.get("/certificates/:id", async (req, res) => {
//   const certiId = req.params.id;
//   const details = await certificateDetails.findOne({ certiId: certiId }, { _id: 0 });
//   res.json(details);
// });
router.post("/certificates", async (req, res) => {
  try {
    const data = req.body;
    const result = await certificateDetails.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.get("/api/certificates/:certiId", async (req, res) => {
  try {
    const certiId = req.params.certiId;
    const certificate = await certificateDetails.findOne({ certiId });

    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// router.post("/courses", async (req, res) => {
//   try {
//     const data = req.body;
//     console.log("DATAA ", data);
//     const result = new courses(data);
//     await result.save();
//     res.status(201).json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json();
//   }
// });

// router.put("/courses/:id", async (req, res) => {
//   const data = req.body;
//   const courseId = data.courseId;
//   try {
//     const result = await courses.findOneAndUpdate(
//       { courseId: courseId },
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!result) {
//       return res.status(404).send("Course not found");
//     }
//     res.send("Course updated successfully");
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });

// router.delete("/courses/:id", async (req, res) => {
//   const courseId = req.params.id;
//   try {
//     const result = await courses.findOneAndDelete({ courseId: courseId });
//     if (!result) {
//       return res.status(404).send("Course not found");
//     }
//     res.send("Course deleted successfully");
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });

module.exports = router;
