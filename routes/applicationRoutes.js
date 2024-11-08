const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Application = require("../models/Application");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.post("/application", async (req, res, next) => {

    const { applicationID,
            fullName,
            applicationStatus,
            panCard,
            dateOfBirth,
            email,
            phone,
            address,
            city,
            state,
            zipCode,
            annualIncome,
            employmentStatus,
            creditScore,
            assets,
            dateApplied
     } = req.body;
  
    try {

      const newApplication = new Application({ 
        applicationID,
            fullName,
            applicationStatus,
            panCard,
            dateOfBirth,
            email,
            phone,
            address,
            city,
            state,
            zipCode,
            annualIncome,
            employmentStatus,
            creditScore,
            assets,
            dateApplied
      });
      await newApplication.save();
  
      res.status(201).json({ message: "Application submitted successfullt" });
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;
