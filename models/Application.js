const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  applicantID: Number,
  fullName: String,
  applicationStatus: String,
  panCard: String,
  dateOfBirth: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  annualIncome: Number,
  employmentStatus: String,
  creditScore: Number,
  assets: String,
  dateApplied: Date
});

module.exports = mongoose.model("Application", applicationSchema);
